// console.log("Started Server.js")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const User = require("./userModel")



const app = express()
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("nodeserver is running")
})


//REGISTER ROUTE//REGISTER ROUTE

app.post("/api/users/register", async (req, res) => {
    console.log(req.body)
    // check if existing user
    const existingUser = await User.findOne({ email: req.body.email })
    if (existingUser) {
        res.send({ error: "email already exist" })
        return;
    }
    //  create a new user
    const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        isAdmin: false
    })
    // save the new user 
    const savedUser = await newUser.save();
    if (savedUser) {
        res.send({ success: "Registration Successful" })

    } else {
        res.send({ error: "ERROR SAVING USER" })
    }
})

app.post("/api/user/login", async (req, res) => {
    // console.log(body)
    // check if the email exists
    const existingUser = await User.findOne({ email: req.body.email })
    // if the email dosnt exist send an error message
    if (!existingUser) {
        res.send({ error: "There is no user by this email" })
        return
    }
    // check if the password submitted matches the existing user password
    if (req.body.password !== existingUser.password) {
        res.send({ error: "incorrect password" })
        return
    }
    res.send({ success: "login successful", user: existingUser })
})


mongoose.connect("mongodb+srv://chiderangana:Jamila20@cluster0.0ld3cn0.mongodb.net/")
    .then(res => console.log("mongoDB connected"))
    .catch(err => console.log(err))

app.listen(5000, () => {
    console.log("listening on port 5000")
})
