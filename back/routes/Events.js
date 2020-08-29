const express = require('express');
const ProductModel = require('../model/EventsModel.js')
const { getEvents, postEvents,deleteEvents,patchEvents,addReservation} = require('../controllers/contEvents')
const router = express.Router();


router.get('/getEvents', getEvents)

router.post('/postEvents', postEvents)

router.delete('/deleteEvents/:postId',deleteEvents)
router.patch('/patchEvents/:postId',patchEvents)
router.patch('/addReservation/:postId',addReservation)




module.exports = router;