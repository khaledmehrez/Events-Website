const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require("cors");
const bodyParser = require('body-parser')
require("dotenv").config();
const cookieParser = require('cookie-parser')


const path = require('path');
//add cors
app.use(cors({credentials: true, origin: true}));
//parse json file
app.use(bodyParser.json());

//parse cookie
app.use(cookieParser())
/*import routes*/
//import from route
const EventsRoute = require('./routes/Events.js');
const CategorieRoute = require('./routes/categorie.js');
const typeRoute = require('./routes/type.js');
const usersRoute = require('./routes/users');
const home = require('./routes/testHome')
const upload=require('./routes/uploadPicture')
// middelware
app.use('/Events', EventsRoute);
app.use('/users', usersRoute);

app.use('/', home)

app.use('/Categorie',CategorieRoute)
app.use('/type',typeRoute)
app.use('/image',upload)

app.use(express.static('./public'));





mongoose.connect("mongodb+srv://khaled:simplonp2@cluster0.djie4.mongodb.net/eventdb?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false  }, () => {
    console.log("connected to db")
})
//listen
app.listen('5000')



 app.get('/', (req, res) => res.send('index'));












