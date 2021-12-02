const express = require('express')
const bcrypt = require('bcrypt');
const router = express.Router()
const bodyParser = require('body-parser');
const users= require('./usersdb.js')
const books= require('./booksdb.js')
const multer= require('multer')
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use(express.json());
const maxSize=1024*1024
const fileStorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./profilePic')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    },
    onFileUploadStart: function(file, req, res){
        if(req.files.file.length > maxSize) {
          return false;
        }
      }
})
const upload=multer({storage:fileStorage})

router.get('/users',async (req, res)=>{
    
    try {
        const newUsers = await users.find()
        res.status(201).json(newUsers)
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
})
router.post('/users', upload.single('images'),async (req, res)=>{
    // 
   
    const newUsers=new users({
        userId:await users.find().count()+1,
        username:req.body.username,
        password:await bcrypt.hash(req.body.password, 10),
        phone:req.body.phone,
        book_issued:req.body.book_issued,
        profilePic:req.file.path
    })
    try {
        const user = await newUsers.save()
        res.status(201).json(user)
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
})
router.get('/userBooks/:id',async (req, res)=>{
    let id=req.params.id
    let user=await users.find({userId:id},{userId:1,username:1,phone:1,book_issued:1,_id:0})
    // console.log(user[0].book_issued)
    let book=await books.find({id:user[0].book_issued},{id:1,_id:0,name:1,author:1,coverpage:1})
    console.log(book)
    res.status(201).json({user:user,
        message:book[0]==undefined?"No Book Issued":book})
})
module.exports = router