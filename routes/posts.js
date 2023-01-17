const express=require('express');
const passport=require('passport');
const postController=require('../controller/post_controller');
const router=express.Router();
router.post('/create-post',passport.checkAuthentication,postController.createPost);
router.get('/destroy/:id',passport.checkAuthentication,postController.destryPost);
module.exports=router;