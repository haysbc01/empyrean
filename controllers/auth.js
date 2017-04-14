var Auth = require('../models/auth.schema.js'),
    bcrypt = require('bcryptjs'),
    colors = require('colors');

module.exports = {
  registerUser : (req,res)=>{
    var newUser = new Auth(req.body);
    newUser.save(function(err,user){
      if(err){
        console.log(err)
        res.status(403).send(err)
      }else{

        // req.session.uid = user._id;
        res.send({
          message:'register success'
        })
      }
    })
  }




}
