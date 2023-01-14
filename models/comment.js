const mongoose=require('mongoose');
const currentSchema=new mongoose.Schema({
    content:{
        type:String,
        required
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }
},{
    timestamps:true
});
const Comment=mongoose.model('Comment',currentSchema);
module.exports=comment;