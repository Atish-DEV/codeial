const mongoose=require('mongoose');
const currentSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'          //refer to User Model
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'          //refer to Post Model
    }
},{
    timestamps:true
});
const Comment=mongoose.model('Comment',currentSchema);
module.exports=Comment;