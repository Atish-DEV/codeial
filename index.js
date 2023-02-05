const express=require('express');
const port=8000;
const app=express();
const expressLayout=require('express-ejs-layouts');
const cookieParser=require('cookie-parser');
const bodyparser=require('body-parser');
const db=require('./config/mongoose');
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');
const MongoStore=require('connect-mongo');
const flash=require('connect-flash');
const mWare=require('./config/middleware');
//defining a layout
app.use(expressLayout);
//access to static pages for layout
app.use(express.static('./assets'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
//use body parser
app.use(bodyparser.urlencoded({extended:false}));
app.use(cookieParser());
//setting up view-engine & views directory
app.set('view engine','ejs');
app.set('views','./views');
app.use(session({
    name:'codeials',
    secret:'something',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store:  MongoStore.create({
        mongoUrl: 'mongodb://localhost/codeials',
        autoRemove:'disabled'
    },
    function(err){
        console.log(err);
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser); 
app.use(flash());
app.use(mWare.setFlash);
//defining router for all routes to 'routes' folder using middleware
app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err){
        console.log(`Error : ${err}`);
        return;
    }
    console.log(`Successfull on port : ${port}`);
});