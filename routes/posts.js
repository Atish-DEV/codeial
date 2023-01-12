const express=require('express');
const passport=require('passport');
const postController=require('../controller/post_controller');
const router=express.Router();
router.post('/create-post',postController.createPost);
module.exports=router;