const express= require("express");
const {users} = ("/model/");
//const bcrypt = require("bcryptjs");
const app = express();


require("./model/")

app.set("view engine","ejs")

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.send("you are in homepage");
})


app.get("/register",(req,res)=>{
    res.render("register.ejs");
})

//post api
app.post("/createUser",async (req, res)=>{
    await users.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password, 
    });
    res.send("user created successfully");
})

app.listen(4500,()=>{
    console.log("registration has satrted");
})