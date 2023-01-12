const express=require('express');
const homeController=require('../controller/home_controller');
const router=express.Router();
router.get('/',homeController.home);    //setting routes & controller of '/'
router.use('/users',require('./users'));    //redirect all routes of '/users'
router.use('/post',require('./posts')); 
module.exports=router;