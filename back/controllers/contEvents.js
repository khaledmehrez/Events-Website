const EventsModel = require('../model/EventsModel')
const path = require('path')


exports.getEvents = (async (req, res) => {
    const Eventsdata = await EventsModel.find()
    res.send(Eventsdata)

});

exports.postEvents = ((req, res) => {
    console.log(req.body.Image)
    const Eventsdata = new EventsModel(
       
        {
            title: req.body.Title,
            description:req.body.Description,
            type: req.body.Type,
            categorie: req.body.Categorie,
            date: req.body.date,
            time:req.body.time,
            payement: req.body.Payement,
            location: req.body.Location,
            image:req.body.Image,
            iduser:req.body.idUser

            
        }
    );
   
    Eventsdata.save().then(data => {
        res.json(data)
    })

    

});



exports.deleteEvents= (async (req, res) => {
    const Eventsdata = await EventsModel.findOneAndDelete({_id:req.params.postId})
    res.send(JSON.stringify(Eventsdata))
});



exports.patchEvents=(async (req,res)=>{
    
    const Eventsdata = await EventsModel.findOneAndUpdate({_id:req.params.postId}, {$set: { 
        title: req.body.Title,
            description:req.body.Description,
            type: req.body.Type,
            categorie: req.body.Categorie,
            date: req.body.date,
            time:req.body.time,
            payement: req.body.Payement,
            location: req.body.Location,
           
            
    }})

    res.send(JSON.stringify(Eventsdata))
});


exports.addReservation=(async (req,res)=>{
    console.log(req.body)
    const Eventsdata = await EventsModel.findOneAndUpdate({_id:req.params.postId}, {$set: { 
        ReservedPerson:req.body
           
            
    }})

    res.send(JSON.stringify(Eventsdata))
});
