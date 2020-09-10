const usersModel = require('../model/usersModel')
const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken');
exports.getUsers =(async(req,res)=>{
    const usersdata = await usersModel.find()
   
     res.send(usersdata)
    
});

exports.postUsers =( (req,res)=>{
    console.log(req.body)

    bcrypt.genSalt( (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            
            const usersdata = new usersModel (
                
                {role:req.body.role,
                    type:req.body.type,
                    socialraison:req.body.socialReason,
                    firstname:req.body.firstName ,
                    lastname: req.body.lastName,
                    password:hash,
                    mail:req.body.mail,
                    adress:req.body.adresse,
                    pre:req.body.preference
                   
                    
        
                }
            );
           
            usersdata.save().then(data=>{
                res.json(data)
            })
            
        });
    });
   
   
    




});



exports.postLogin= (async (req,res)=>{
  
   
    
        const usersdata = await usersModel.find({mail:req.body.mail})
    
        if(usersdata[0]===undefined){
            return res.send('user is not registred')
        }
        else{
        const userpassword = await bcrypt.compare(req.body.password, usersdata[0].password)
    if(userpassword){
        const tokenData={data:usersdata[0]}
        const token =jwt.sign(tokenData, process.env.ACCESS_TOKEN_SECRET)
        
    
        res.cookie('token',token).send({token:token}) 
        
    
    
    }
    else{
        res.send("password is incorrect")
    
      }
    }
      

  
 

})

exports.deleteUsers= (async (req, res) => {
    const userdata = await usersModel.findOneAndDelete({_id:req.params.postId})
    res.send(JSON.stringify(userdata))
});



exports.patchUsers=(async (req,res)=>{
    
    const userdata = await usersModel.findOneAndUpdate({_id:req.params.postId}, {$set: { 
        
        role:req.body.role,
        type:req.body.type,
        socialraion:req.body.socialRaison,
        firstname:req.body.firstName ,
        password:req.body.password,
        mail:req.body.mail,
        
        lastname: req.body.lastName,
        preference:req.body.preference
            
    }})

    res.send(JSON.stringify(userdata))
});
