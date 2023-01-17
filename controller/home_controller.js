//controller of '/'
const Post=require('../models/post');
const User=require('../models/user');
module.exports.home=function(req,res){
    // Post.find({},function(err,post){
    //     //console.log(post);
    //     return res.render('home',{
    //             title:"homepage",
    //             posts:post
    //         });
    Post.find({})
    .populate({
        path:'comments',
        populate:{
            path:'user'
        }
    })
    .populate('user').exec(function(req,post){
        User.find({},function(err,user){
            return res.render('home',{
            title:"homepage",
            posts:post,
            all_users:user
        });
    })
    });
    }
