const express=require('express');
const passport=require('passport');
const commentController=require('../controller/comment_controller');
const router=express.Router();
router.post('/create-comment',passport.checkAuthentication,commentController.createComment);
module.exports=router;