const express = require('express');
const ProductModel = require('../model/EventsModel.js')
const { getEvents, postEvents,deleteEvents,patchEvents} = require('../controllers/contEvents')
const router = express.Router();


router.get('/getEvents', getEvents)

router.post('/postEvents', postEvents)






module.exports = router;