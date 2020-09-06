const mongoose= require('mongoose')

const typeschema=mongoose.Schema(
    {
     type:{type:Array}
       
        
    }
);




module.exports=mongoose.model('type',typeschema)