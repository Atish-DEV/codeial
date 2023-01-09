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
//setting routes & controller of '/users/sign-up'
router.get('/sign-up',userController.signUp);
//setting routes & controller of '/users/sign-in'
router.get('/sign-in',userController.signIn);
//setting routes & controller of '/users/create-user'
router.post('/create-user',userController.createUser);
router.post('/create-session',userController.createSession);
module.exports=router;