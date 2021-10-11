require('dotenv').config()
const morgan = require('morgan')
const express = require('express')
const app = express()
app.use(express.json())
app.use(morgan('dev'))
const tasks = require('./tasks')
const del=[]
app.get('/', (req, res, next) => {
    try {
        let requiredTasks = tasks.filter((task) =>{
            if(task.isDeleted == false && task.status == 0) return task
        })
        res.status(200).json({ status: 200, message: "TASKS_FETCHED_SUCCESSFULLY", data: requiredTasks })
    }
    catch (err) {
        next(err)
    }
})
app.post('/', (req, res, next) => {
    try {
        let task = {
            id: tasks.length + 1,
            name: req.body.name,
            time: new Date(),
            status:0,
            isDeleted: false,
        }
        tasks.push(task)
        res.status(200).json({ status: 200, message: "TASK_CREATED_SUCCESSFULLY", data: task })
    }
    catch (err) {
        next(err)
    }
})
app.put('/:id', (req, res, next) => {
    try {
        let id = req.params.id
        let name = req.body.name
        let time = new Date()
        let status=0
        let isDeleted=false
        let index = tasks.findIndex((tasks) => {
            return tasks.id == parseInt(id)
        })
        if (index >= 0) {
            let usr = tasks[index]
            usr.name = name
            usr.time = time
            usr.status= status
            usr.isDeleted= isDeleted
            res.status(200).json({ status: 200, message: "TASK_UPDATED_SUCCESSFULLY", data: usr })
        }
        else {
            res.status(404)
            res.end()
    }

    }
    catch (err) {
        next(err)
    }
})
app.delete('/:id', (req, res, next) => {
    try {
        let Id = req.params.id
        let taskIndex = tasks.findIndex((tasks) => {
            return tasks.id == parseInt(Id)
        })
        let task = tasks[taskIndex]
        task.isDeleted = true
        res.status(200).json({ status: 200, message: "TASK_DELETED_SUCCESSFULLY", data: task })
    }
    catch (err) {
        next(err)
    }
})
app.put('/done/:id', (req, res, next) => {
    try {
        let id = req.params.id
        let time = new Date()
        
        let index = tasks.findIndex((tasks) => {
            return tasks.id == parseInt(id)
        })
        if (index >= 0) {

            let usr = tasks[index]
            usr.name = tasks[index].name
            usr.time = time
            
            usr.isDeleted= tasks[index].isDeleted
            if(tasks[index].status==0){
                usr.status = 1
                res.status(200).json({ status: 200, message: "TASK_COMPLETED", data: usr })
            }
            else{
                res.status(404).json({ status: 404,message:"TASK_ALREADY_COMPLETED"})
            }
            
        }
        else {
            res.status(404)
            res.end()
    }

    }
    catch (err) {
        next(err)
    }
})

app.put('/undo/:id', (req, res, next) => {
    try {
        let id=req.params.id
        let time = new Date()
        
        let index = tasks.findIndex((tasks) => {
            return tasks.id == parseInt(id)
        })
        if (index >= 0) {

            let usr = tasks[index]
            usr.name = tasks[index].name
            usr.time = time
            usr.status = tasks[index].status
            
            if(tasks[index].isDeleted == true){
                
                usr.isDeleted=false
                res.status(200).json({ status: 200, message: "TASK_COMPLETED", data: usr })
            }
            else{
                res.status(404).json({ status: 404,message:"TASK_ALREADY_COMPLETED"})
            }
            
        }
        else {
            res.status(404)
            res.end()
    }

    }
    catch (err) {
        next(err)
    }
})
app.get('/page',(req,res)=>{
    try {
        let page=Number.parseInt(req.query.page)
    let limit=Number.parseInt(req.query.limit)
    let start=(page-1)*limit
    let end=page*limit
    const results={}
    
    if(start>0)
    {
        results.prev={
            page:page-1,
            limit:limit
        }
    }
    if(end<tasks.length-1){
        results.next={
            page:page+1,
            limit:limit
        }
    }
    results.results=tasks.slice(start,end)
    res.status(200).json({status: 201,message:"Users ARE",data:results});

    }
    catch (err) {
        next(err)
    }
     
})
app.get()
app.use(async (req, res, next) => {
    res.status(404).json({ status: 404, message: "INVALID_ROUTE", data: {} })
})
app.listen(process.env.PORT, () => {
    console.log(`Server run at  ${process.env.PORT}`)
})