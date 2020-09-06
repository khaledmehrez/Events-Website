const CategorieModel = require('../model/CategorieModel')
const path = require('path')


exports.getCategorie = (async (req, res) => {
    const Categoriedata = await CategorieModel.find()
    res.send(Categoriedata)

});


exports.postCategorie = ((req, res) => {
    
    const Categoriedata = new CategorieModel(
        {
            Categorie:req.body.Categorie

            
        }
    );

    Categoriedata.save().then(data => {
        res.json(data)
    })

});
