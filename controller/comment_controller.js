const Comment=require('../models/comment');
const Post=require('../models/post');

module.exports.createComment=async function(req,res){
    try{
        let post =await Post.findById(req.body.post);
    let comment=await Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            }, function(err, comment){
                // handle error

                post.comments.push(comment);
                post.save();

                res.redirect('/');
            })
        }
        catch(err){
            console.log(err);
        }
    }
module.exports.destroy=function(req,res){
    Comment.findById(req.params.id,function(err,comment){
        if(comment.user==req.user.id){
            let postId=comment.post;
            comment.remove();
            Post.findByIdAndUpdate(postId,{$pull: {comments:req.params.id}},function(err,post){
                return res.redirect('back');
            })
        }
        else{
            return res.redirect('back');
        }
    })
}