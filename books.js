const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
router.use(express.json())
const users= require('./usersdb.js')
const books= require('./booksdb.js')

router.get('/books',async (req, res)=>{
    try {
        const newbooks = await books.find()
        res.status(201).json(newbooks)
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
})
router.post('/books',async (req, res)=>{
    const newBook=new books({
        id:await books.find().count()+1,
        name:req.body.name,
       author:req.body.author,
       coverPage:req.body.coverPage,
       user:req.body.user
    })
    console.log(newBook)
    try {
        
        const book = await newBook.save()
        res.status(201).json(book)
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
})

router.get('/booksUser/:id',async (req, res)=>{
    let id=req.params.id
    let book =await books.find({id:id},{id:1,name:1,author:1,user:1,_id:0,coverPage:1})
 
    let user=await users.find({userId:book[0].user},{userId:1,_id:0,username:1,phone:1})
    console.log(user)
     res.status(201).json({book:book,
        message:user[0]==undefined?"No  User Found":user})
})

module.exports = router

