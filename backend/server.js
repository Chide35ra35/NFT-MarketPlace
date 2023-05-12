// console.log("Started Server.js")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("nodeserver is running")
})


mongoose.connect("mongodb+srv://chiderangana:Jamila20@cluster0.0ld3cn0.mongodb.net/")
    .then(res => console.log("mongoDB connected"))
    .catch(err => console.log(err))

app.listen(5000, () => {
    console.log("listening on port 5000")
})
