
// Importing the express module and models
const express = require('express');
const mongoose = require('mongoose');
const dishSchema = require('./models/dish.model');

//routes and APP
require("dotenv").config()

const app = express();
const port = 9000;
const dishRoute = require('./routes/dish.route');

// Middleware
app.use(express.json());
app.use('/api',dishRoute)


// routes
app.get('/',(req,res) =>{
    res.send('API HOME')
})


//connecting to the database MongoDB    mongodb+srv://admin1:qsPquO98ze5OON21@cluster0.ma6mwly.mongodb.net/?retryWrites=true&w=majority
//mongodb+srv://Hermmann:ccelHGsVaGxI6ECN@cluster0.lfvaceb.mongodb.net/test   
mongoose.connect("mongodb+srv://Hermmann:ccelHGsVaGxI6ECN@cluster0.lfvaceb.mongodb.net/retryWrites=true&w=majority")
.then(()=>console.log('Connected to MongoDB Atlas'))
.catch((error)=>console.error(error))


app.listen(port,()=>console.log(`SERVER LISTENING ON PORT`,port))