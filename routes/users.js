const express=require('express');
const userController=require('../controller/user_controller');
const router=express.Router();
//setting routes & controller of '/users'
router.get('/',function(req,res){       
    res.send('<h1>User page</h1>');
});
//setting routes & controller of '/users/profiles'
router.get('/profile',userController.profile);
module.exports=router;