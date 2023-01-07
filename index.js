const express=require('express');
const port=8000;
const app=express();
//defining router for all routes to 'routes' folder using middleware
app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err){
        console.log(`Error : ${err}`);
        return;
    }
    console.log(`Successfull on port : ${port}`);
});