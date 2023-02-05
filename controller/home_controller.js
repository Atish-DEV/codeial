//controller of '/'
const Post=require('../models/post');
const User=require('../models/user');
module.exports.home=async function(req,res){
  try{
    let post=await Post.find({})
    .populate({
        path:'comments',
        populate:{
            path:'user'
        }
    })
    .populate('user')
    let user=await User.find({});
    return res.render('home',{
        title:"homepage",
        posts:post,
        all_users:user
    });
  }catch(e){
    console.log(err);
  }
}
