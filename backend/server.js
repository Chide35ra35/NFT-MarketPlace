// // console.log("Started Server.js")
// const express = require("express")
// const mongoose = require("mongoose")
// const cors = require("cors")
// const User = require("./userModel")
// const Collection = require("./collectionModel")




// const app = express()
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("nodeserver is running")
// })


// //REGISTER ROUTE//REGISTER ROUTE

// app.post("/api/users/register", async (req, res) => {
//     console.log(req.body)
//     // check if existing user
//     const existingUser = await User.findOne({ email: req.body.email })
//     if (existingUser) {
//         res.send({ error: "email already exist" })
//         return;
//     }
//     //  create a new user
//     const newUser = new User({
//         email: req.body.email,
//         username: req.body.username,
//         password: req.body.password,
//         isAdmin: false
//     })
//     // save the new user 
//     const savedUser = await newUser.save();
//     if (savedUser) {
//         res.send({ success: "Registration Successful" })

//     } else {
//         res.send({ error: "ERROR SAVING USER" })
//     }
// })

// app.post("/api/users/login", async (req, res) => {
//     // console.log(body)
//     // check if the email exists
//     const existingUser = await User.findOne({ email: req.body.email })
//     // if the email dosnt exist send an error message
//     if (!existingUser) {
//         res.send({ error: "There is no user by this email" })
//         return
//     }
//     // check if the password submitted matches the existing user password
//     if (req.body.password !== existingUser.password) {
//         res.send({ error: "incorrect password" })
//         return
//     }
//     res.send({ success: "login successful", user: existingUser })
// })

// app.post("/api/collections", async (req, res) => {
//     const newCollection = new Collection({
//         title: req.body.title,
//         image: req.body.price,
//         price: req.body.price,
//         description: req.body.description,
//         owner: req.body.owner
//     });
//     const savedCollection = await newCollection.save();
//     if (savedCollection) {
//         res.send({ success: "Collection Saved Successsfully" })
//     } else {
//         res.send({ error: 'Error Saving Collection' })
//     }
// })
// //GET ALL PRODUCTS ROUTE
// app.get("/api/collections", async (req, res) => {
//     const collections = await Collection.find()
//     res.send(collections)

// })


// mongoose.connect("mongodb+srv://chiderangana:Jamila20@cluster0.0ld3cn0.mongodb.net/")
//     .then(res => console.log("mongoDB connected"))
//     .catch(err => console.log(err))

// app.listen(5000, () => {
//     console.log("listening on port 5000")
// })
// // console.log("Started Server.js")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const User = require("./userModel")
const Collection = require("./collectionModel")
const { isValidObjectId } = require("mongoose");




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

app.post("/api/users/login", async (req, res) => {
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

app.post("/api/collections", async (req, res) => {
    const newCollection = new Collection({
        title: req.body.title,
        image: req.body.image,
        price: req.body.price,
        description: req.body.description,
        owner: req.body.owner
    })
    const savedCollection = await newCollection.save();
    if (savedCollection) {
        res.send({ success: "Collection Saved Sucessfully" })
    } else {
        res.send({ error: "Error Saving Collection" })
    }
})
app.get("/api/collections", async (req, res) => {
    const collections = await Collection.find().populate("owner");
    res.send(collections.reverse())
    // console.log(collections)
});
app.get("/api/collections/owner/:id", async (req, res) => {
    const id = req.params.id;
    const collections = await Collection.find({ owner: id });
    res.send(collections.reverse())
})

//DELETE A PRODUCT ROUTE
app.delete("/api/collections/:id", async (req, res) => {
    const id = req.params.id;
    if (!isValidObjectId(id)) {
        res.send({ error: "The ID of the product is invalid" });
        return;
    }
    const deletedCollection = await Collection.findByIdAndDelete(id);
    if (deletedCollection) {
        res.send({ success: "Product Deleted" })
    } else {
        res.send({ error: "Error deleting product" })
    }
})
app.put("/api/users/:id", async (req,res)=>{
    const id = req.params.id;
    const user = await User.findById(id);
    user.image = req.body.image || user.image;
    user.username = req.body.username || user.username;
    user.password = req.body.password || user.password;
    user.btcwallet = req.body.btcwallet || user.btcwallet;
    user.ethwallet = req.body.ethwallet || user.ethwallet;

   const  updatedUser = await user.save()
    if(updatedUser){
        res.send({success : "Profile Updated Successfully", user : updatedUser})
    }else{
        res.send({error : "Error updating profile"})
    }
})



mongoose.connect("mongodb+srv://chiderangana:Jamila20@cluster0.0ld3cn0.mongodb.net/")
    .then(res => console.log("mongoDB connected"))
    .catch(err => console.log(err))


app.listen(5000, () => {
    console.log("listening on port 5000")
})