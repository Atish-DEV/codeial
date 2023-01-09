const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/codeials');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error'));
db.once('open',function(){
    console.log('Successfully connected to database');
});
module.exports=db;