const mongoose= require('mongoose')

const Categorieschema=mongoose.Schema(
    {
     Categorie:{type:Array}
       
        
    }
);




module.exports=mongoose.model('Categorie',Categorieschema)