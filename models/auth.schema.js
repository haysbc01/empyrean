var mongoose = require('mongoose'),
    bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({

  email: {
    type: String,
    unique: true
  },
  password: String,
  Created: {
    type: Number,
    default: ()=> Date.now()
  }
});


module.exports = mongoose.model('designUsers', userSchema);
