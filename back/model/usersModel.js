const mongoose= require('mongoose')

const usersSchema=mongoose.Schema(
    {
            role:{type:String},
            type:{type:String},
            socialraison:{type:String},

            firstName:{type:String} ,
            lastname:{type:String},
            password:{type:String},
            mail:{type:String},
            
            
       
    }
);


module.exports=mongoose.model('users',usersSchema)