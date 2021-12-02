const express=require('express')
const app = express()
const port=3500
app.use(express.json())
const mongoose = require('mongoose')
const url="mongodb://localhost:27017/project"
mongoose.connect(url,{useNewUrlParser:true})
const db = mongoose.connection
db.on('error', (error)=>{console.error(error)})
db.once('open',()=>{console.log("Database started")})
const bodyParser = require('body-parser');
const router=require('./users.js')
app.use('/users',router)
const router1=require('./books.js')
app.use('/books',router1)
app.listen(port,()=>console.log("Sever started at port:"+port))

