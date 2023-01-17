const Post=require('../models/post');
const Comment=require('../models/comment');
module.exports.createPost=function(req,res){
    if(req.isAuthenticated()){
        if(req.body.content!=''){
            Post.create({
                content:req.body.content,
                user:req.user._id
            },function(err,post){
                if(err){
                    console.log(err);
                }
                if(post){
                    console.log('Post added');
                }
            });
        }
    }
    return res.redirect('back');
}
module.exports.destryPost=function(req,res){
    Post.findById(req.params.id,function(err,post){
        //  console.log(post.user);
        // let check=(post.user==req.user.id);
        if(post.user==req.user.id){
            post.remove();
            Comment.deleteMany({post:req.params.id},function(err){
               if(err){
                console.log(err);
               } 
               return res.redirect('back');
            })
        }
        else{
            return res.redirect('back');
        }
    });
}
