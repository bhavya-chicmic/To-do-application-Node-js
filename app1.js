const express=require('express')
const app = express()
const port=4000
app.use(express.json())
app.set('view engine', 'ejs');
const mongoose = require('mongoose')
const url="mongodb://localhost:27017/project"
mongoose.connect(url,{useNewUrlParser:true})
const db = mongoose.connection
db.on('error', (error)=>{console.error(error)})
db.once('open',()=>{console.log("Database started")})
const bodyParser = require('body-parser');
const user = require('./usersdb.js')
app.use(require("express-session")({
    secret:"Any normal Word",       
    resave: false,          
    saveUninitialized:false    
}));

app.use(bodyParser.urlencoded(
    { extended:true }
))
app.get("/home", (req, res) => {
    res.render("home");
})

app.get("/userprofile", (req, res) => {
    res.render("userprofile");
})
app.get("/login", (req, res) => {
    res.render("login");
});
// app.post("/login",passport.authenticate("local",{
//     successRedirect:"/userprofile",
//     failureRedirect:"/login"
// }),function (req, res){
// });
app.get("/register", (req, res) => {
    res.render("register");
});
// app.post("/register",async function (req, res) {
//     var username = req.body.username
//     const password = req.body.password
//     console.log(username,password)
//    await user.register(new user({ username: username }), password, function (err, user) {
//     if (err) {
//     console.log(err);
//     return res.render("register");
//     }
//     passport.authenticate("local")(req, res, function () {
    
//     });
//     });
//     });
    app.post("/register",async function (req, res) {
        const newUser={
            userId:req.body.userId,
            username: req.body.username,    
            password:"",
            phone: req.body.phone
        }
        console.log(newUser)
       const users=await newUser.save();
       res.status(201)
       res.send('success', 'You have logged in',users)
        res.redirect("/login");
    });
app.get("/logout",(req,res)=>{
    req.logout();
    res.redirect("/home");
});
function isLoggedIn(req,res,next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


app.get('/', async (req, res) => {
    try {
        const book = await books.find()
        res.status(201).json(book)
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
})
app.post('/',async (req,res)=>{
    let book=new books({
        _id:books.length+1,
        name:req.body.name,
        author:req.body.author
    })
    try{
        const newBook = await book.save()
        res.status(201).json(newBook)
    }
    catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
})
app.listen(port,()=>console.log("Sever started at port:"+port))

