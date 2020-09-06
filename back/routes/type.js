const express = require('express');
const typeModel = require('../model/typeModel.js')
const { gettype, posttype} = require('../controllers/conttype')
const router = express.Router();


router.get('/gettype', gettype)

router.post('/posttype', posttype)

module.exports = router;