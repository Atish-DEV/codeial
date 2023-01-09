const express=require('express');
const userController=require('../controller/user_controller');
const router=express.Router();
//setting routes & controller of '/users'
router.get('/',function(req,res){       
    return res.render('user',{
        title:'User page'
    });
});
//setting routes & controller of '/users/profiles'
router.get('/profile',userController.profile);
router.get('/sign-up',userController.signUp);
router.get('/sign-in',userController.signIn);
module.exports=router;