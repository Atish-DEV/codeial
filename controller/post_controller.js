const Post=require('../models/post');
const Comment=require('../models/comment');
const User = require('../models/user');
module.exports.createPost=async function(req,res){
    try{
        if(req.isAuthenticated()){
            if(req.body.content!=''){
                let post=await Post.create({
                    content:req.body.content,
                    user:req.user._id
                });
                let user=await User.findById(req.user._id);
                if(post){
                    if(req.xhr){
                        req.flash('success','new post added');
                        return res.status(200).json({
                            data:{
                                post:post,
                                user:user.name
                            },
                            message:'New post Ceated'
                        });
                    }
                    }
                };
            }
        
        return res.redirect('back');
    }
    catch(err){
        console.log(err);
    }
}
module.exports.destryPost=async function(req,res){
    let post=await Post.findById(req.params.id);
        //  console.log(post.user);
        // let check=(post.user==req.user.id);
        if(post.user==req.user.id){
            post.remove();
            Comment.deleteMany({post:req.params.id});
            if(req.xhr){
            req.flash('success','Post and its comment deleted');
            return res.status(200).json({
                data:{
                    post_id:req.params.id
                },
                message:'post deleted'
            });
        }
        }
            return res.redirect('back');
}
