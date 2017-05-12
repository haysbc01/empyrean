var Design = require('../models/design.schema.js'),
    colors = require('colors');

module.exports = {
    getDesigns : (req, res)=>{
        Design.find(function(err,design){
            if(err){
            console.log(err)
            } else {
                res.send(design)
            }
        })
        
    }
}