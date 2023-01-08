const express=require('express');
const port=8000;
const app=express();
const expressLayout=require('express-ejs-layouts');
//defining a layout
app.use(expressLayout);
//access to static pages for layout
app.use(express.static('./assets'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
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