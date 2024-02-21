const express=require('express');

const router=express.Router();
const {auth}=require('./auth');
const {others}=require('./others');

router.use('/v1',auth)
router.use('/v2',others)


module.exports={router}