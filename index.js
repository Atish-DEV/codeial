const express=require('express');
const port=8000;
const app=express();
const expressLayout=require('express-ejs-layouts');
const cookieParser=require('cookie-parser');
const bodyparser=require('body-parser');
const db=require('./config/mongoose');
//defining a layout
app.use(expressLayout);
//access to static pages for layout
app.use(express.static('./assets'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
//use body parser
app.use(bodyparser.urlencoded({extended:false}));
app.use(cookieParser());
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