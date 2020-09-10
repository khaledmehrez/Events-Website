const mongoose= require('mongoose')

const usersSchema=mongoose.Schema(
    {
            role:{type:String},
            type:{type:String},
            socialraison:{type:String},

            firstname:{type:String} ,
            lastname:{type:String},
            password:{type:String},
            mail:{type:String},
            pre:{type:Array},
            adress:{type:String}
       
    }
);


module.exports=mongoose.model('users',usersSchema)