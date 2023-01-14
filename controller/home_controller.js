//controller of '/'
const Post=require('../models/post');
module.exports.home=function(req,res){
    // Post.find({},function(err,post){
    //     //console.log(post);
    //     return res.render('home',{
    //             title:"homepage",
    //             posts:post
    //         });
    Post.find({}).populate('user').exec(function(req,post){
        return res.render('home',{
            title:"homepage",
            posts:post
    })
    });
    }
