//chamando o mongoose
const mongoose = require('mongoose');


//criando modelo de como o objeto será representado no mongodb
var UserSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
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


mongoose.model('User', UserSchema);