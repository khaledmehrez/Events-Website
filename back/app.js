const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require("cors");
const bodyParser = require('body-parser')
require("dotenv").config();


const path = require('path');
//add cors
app.use(cors());
//parse json file
app.use(bodyParser.json());
/*import routes*/
//import from route
const EventsRoute = require('./routes/Events.js');

const home = require('./routes/testHome')
// middelware
app.use('/Events', EventsRoute);

app.use('/', home)




mongoose.connect("mongodb+srv://khaled:simplonp2@cluster0.djie4.mongodb.net/eventdb?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected to db")
})
//listen
app.listen('5000')











