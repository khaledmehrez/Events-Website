const mongoose= require('mongoose')

const Eventschema=mongoose.Schema(
    {
        title:{type:String,},
        description:{type:String},
        type:{type:String},
       image:{type:String},
        categorie:{type:String} ,
       date:{type:String},
       time:{type:String},
        payement:{type:String},
        location:{type:String} ,
        iduser:{type:String},
        ReservedPerson:{type:Array},
       
       
        
    }
);




module.exports=mongoose.model('Events',Eventschema)