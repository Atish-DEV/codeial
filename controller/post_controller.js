const Post=require('../models/post');
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