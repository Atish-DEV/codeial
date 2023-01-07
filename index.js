const express=require('express');
const port=8000;
const app=express();
//defining router for all routes to 'routes' folder using middleware
app.use('/',require('./routes'));
//setting up view-engine & views directory
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port,function(err){
    if(err){
        console.log(`Error : ${err}`);
        return;
    }
    console.log(`Successfull on port : ${port}`);
});