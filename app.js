require('dotenv').config()
const morgan = require('morgan')
const bodyParser = require('body-parser');
const express = require('express')
const fs = require('fs');
const app = express()
app.use(express.json())
app.use(morgan('dev'))
let tasks = []
let fileData = JSON.parse(fs.readFileSync('sample.json'))
tasks = fileData

app.get('/', (req, res, next) => {
    try {
        const results = {}
        let limit
        let requiredTasks
        let start
        let end
        if (req.query.limit == null) {
            limit = 10
        } else {
            limit = Number.parseInt(req.query.limit)
        }

        if (req.query.page != null) {
            let page = Number.parseInt(req.query.page)

            start = (page - 1) * limit
            end = page * limit
        } else {
            start = 0
            end = limit
        }
        results.results = tasks.slice(start, end)
        requiredTasks = results.results.filter((task) => {
            if (task.isDeleted == false && task.status == 0) return task
        })
        let pages = (tasks.length / limit)
        pages = pages.toFixed()
        res.status(200).json({
            status: 200,
            message: "TASKS_FETCHED_SUCCESSFULLY",
            total_pages: pages,
            data: requiredTasks
        })
    } catch (err) {
        next(err)
    }
})
app.post('/', (req, res, next) => {
    try {
        let task = {
            id: tasks.length + 1,
            name: req.body.name,
            time: req.body.time,
            status: 0,
            isDeleted: false,
        }

        fileData.push(task)
        fs.writeFileSync('sample.json', JSON.stringify(fileData));
        res.status(200).json({
            status: 200,
            message: "TASK_CREATED_SUCCESSFULLY",
            data: task
        })
    } catch (err) {
        next(err)
    }
})
app.put('/:id', (req, res, next) => {
    try {
        let id = req.params.id
        let name = req.body.name
        let time = req.body.time
        let status = 0
        let isDeleted = false
        let index = fileData.findIndex((task) => {
            return task.id == parseInt(id)
        })

        if (index >= 0) {
            let usr = fileData[index]
            usr.name = name
            usr.time = time
            usr.status = status
            usr.isDeleted = isDeleted

            fileData.splice(index, 1, usr);
            fs.writeFileSync('sample.json', JSON.stringify(fileData));

            res.status(200).json({
                status: 200,
                message: "TASK_UPDATED_SUCCESSFULLY",
                data: usr
            })
        } else {
            res.status(404)
            res.end()
        }

    } catch (err) {
        next(err)
    }
})
app.delete('/:id', (req, res, next) => {
    try {
        let Id = req.params.id
        let taskIndex = fileData.findIndex((tasks) => {
            return tasks.id == parseInt(Id)
        })
        let task = fileData[taskIndex]
        task.isDeleted = true
        res.status(200).json({
            status: 200,
            message: "TASK_DELETED_SUCCESSFULLY",
            data: task
        })
    } catch (err) {
        next(err)
    }
})
app.put('/done/:id', (req, res, next) => {
    try {
        let id = req.params.id
        let time = new Date()

        let index = fileData.findIndex((tasks) => {
            return tasks.id == parseInt(id)
        })
        if (index >= 0) {

            let usr = fileData[index]
            usr.name = fileData[index].name
            usr.time = time

            usr.isDeleted = fileData[index].isDeleted
            if (fileData[index].status == 0) {
                usr.status = 1
                res.status(200).json({
                    status: 200,
                    message: "TASK_COMPLETED",
                    data: usr
                })
            } else {
                res.status(404).json({
                    status: 404,
                    message: "TASK_ALREADY_COMPLETED"
                })
            }

        } else {
            res.status(404)
            res.end()
        }

    } catch (err) {
        next(err)
    }
})
app.put('/undo/:id', (req, res, next) => {
    try {
        let id = req.params.id
        let time = new Date()

        let index = fileData.findIndex((tasks) => {
            return tasks.id == parseInt(id)
        })
        if (index >= 0) {

            let usr = fileData[index]
            usr.name = fileData[index].name
            usr.time = time
            usr.status = tasks[index].status

            if (fileData[index].isDeleted == true) {

                usr.isDeleted = false
                res.status(200).json({
                    status: 200,
                    message: "TASK_COMPLETED",
                    data: usr
                })
            } else {
                res.status(404).json({
                    status: 404,
                    message: "TASK_ALREADY_COMPLETED"
                })
            }

        } else {
            res.status(404)
            res.end()
        }

    } catch (err) {
        next(err)
    }
})
app.get('/search', (req, res, next) => {
    try {
        let name = req.query.name
        let requiredTasks = fileData.filter((task) => {
            if ((task.name.toLowerCase()).includes(name)) return task
        })
        res.status(200).json({
            status: 200,
            message: "TASK_FOUND_SUCCESSFULLY",
            data: requiredTasks
        })
    } catch (err) {
        next(err)
    }

})
app.get('/filter', (req, res, next) => {
    try {
        let del = req.query.del
        let status = parseInt(req.query.status)
        let start1 = req.query.start
        var d = new Date(start1)
        let start = d.getTime()
        let end1 = req.query.end
        var d1 = new Date(end1)
        let end = d1.getTime();



        let require = fileData.filter((task) => {
            if (task.isDeleted.toString() == del) {
                return task
            } else if (task.status == status) {
                return task
            }
            let d2 = new Date(task.time)
            let tsk = d2.getTime()
            if (tsk >= start && tsk <= end) {
                return task
            }
        })

        res.status(200).json({
            status: 200,
            message: "TASKS_FETCHED_SUCCESSFULLY",
            data: require
        })
    } catch (err) {
        next(err)
    }
})
app.use(async (req, res, next) => {
    res.status(404).json({
        status: 404,
        message: "INVALID_ROUTE",
        data: {}
    })
})
app.listen(process.env.PORT, () => {
    console.log(`Server run at  ${process.env.PORT}`)
})