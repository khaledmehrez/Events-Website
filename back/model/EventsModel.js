const mongoose= require('mongoose')

const Eventschema=mongoose.Schema(
    {
        title:{type:String,},
        description:{type:String},
        type:{type:String},
  
        categorie:{type:String} ,
       date:{type:String},
        payement:{type:String},
        location:{type:String} ,
       
        
    }
);


module.exports=mongoose.model('Events',Eventschema)