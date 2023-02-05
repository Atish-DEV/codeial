const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User=require('../models/user');
passport.use(new LocalStrategy({
    usernameField:'email',
    passReqToCallback:true,
},
function(req,email,password,done){
    User.findOne({email:email},function(err,user){
        if(err){
            req.flash('error','error');
            return done(err);
        }
        if(!user || user.password!=password){
            req.flash('error','username/password is not found');
            return done(null,false);
        }
        return done(null,user);
    });
}
));

//serialize the user to decide which key to be kept in cookies
passport.serializeUser(function(user,done){
    done(null,user.id);
});

//deserialize the user from the key of the cookie
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log(err);
            return done(err);
        }
        return done(null,user);
    });
});
//setting for authorisied entry only
passport.checkAuthentication=function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/users/sign-in');
}
//getting user from req to be filled the views
passport.setAuthenticatedUser=function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user=req.user;
    }
    next();
}