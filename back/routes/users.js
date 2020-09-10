const express=require('express');
const usersModel = require('../model/usersModel')
const { getUsers, postUsers,deleteUsers,patchUsers,postLogin  } = require('../controllers/contUsers')
const router= express.Router();

router.get('/getUsers',getUsers)
router.post('/postUsers',postUsers)

router.post('/login',postLogin)

router.delete('/deleteUsers/:postId',deleteUsers)
router.patch('/patchUsers/:postId',patchUsers)
module.exports = router;