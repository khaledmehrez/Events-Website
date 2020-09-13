const EventsModel = require('../model/EventsModel')
const path = require('path')

exports.getEvents = (async (req, res) => {
    const Eventsdata = await EventsModel.find()
    res.send(Eventsdata)

});

exports.postEvents = ((req, res) => {
    const Eventsdata = new EventsModel(
        {
            title: req.body.Title,
            description:req.body.Description,
            type: req.body.Type,
            categorie: req.body.Categorie,
            date: req.body.Date,
            payement: req.body.Payement,
            location: req.body.Location,

            
        }
    );

    Eventsdata.save().then(data => {
        res.json(data)
    })

});






