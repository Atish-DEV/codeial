const Post=require('../models/post');
const Comment=require('../models/comment');
module.exports.createPost=async function(req,res){
    try{
        if(req.isAuthenticated()){
            if(req.body.content!=''){
                let post=await Post.create({
                    content:req.body.content,
                    user:req.user._id
                });
                if(post){
                    req.flash('success','new post added');
                        console.log('Post added');
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
            req.flash('success','Post and its comment deleted');
        }
            return res.redirect('back');
}
