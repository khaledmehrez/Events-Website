const typeModel = require('../model/typeModel')
const path = require('path')


exports.gettype = (async (req, res) => {
    const typedata = await typeModel.find()
    res.send(typedata)

});


exports.posttype = ((req, res) => {
    console.log(req.body)
    const typedata = new typeModel(
        {
            type:req.body.Type

            
        }
    );

    typedata.save().then(data => {
        res.json(data)
    })

});
