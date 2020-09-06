const express = require('express');
const CategorieModel = require('../model/CategorieModel.js')
const { getCategorie, postCategorie} = require('../controllers/contCategorie')
const router = express.Router();


router.get('/getCategorie', getCategorie)

router.post('/postCategorie', postCategorie)

module.exports = router;