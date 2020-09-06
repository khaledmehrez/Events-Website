const express = require('express');
const EventsModel = require('../model/EventsModel.js')
const { getEvents, postEvents,deleteEvents,patchEvents,addReservation} = require('../controllers/contEvents')
const router = express.Router();


const multer= require('multer')
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
  });

  const upload = multer({
    storage: storage,
    
  });



router.get('/getEvents', getEvents)

router.post('/postEvents', postEvents)

router.delete('/deleteEvents/:postId',deleteEvents)
router.patch('/patchEvents/:postId',patchEvents)
router.patch('/addReservation/:postId',addReservation)




module.exports = router;