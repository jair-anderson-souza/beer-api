//chamando o mongoose
const mongoose = require('mongoose');
const bCrypt = require('bcrypt'), Schema = mongoose.Schema;

//criando modelo de como o objeto será representado no mongodb
var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    required: true,
    type: String,
    trim: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  roles: {
    type: [],
    required: true
  }
});

UserSchema.methods.comparePassword = function(password){
  return bCrypt.compareSync(password, this.password);
};
module.exports = mongoose.model('User', UserSchema);