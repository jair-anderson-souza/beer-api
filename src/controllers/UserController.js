const mongoose = require('mongoose');
const User = mongoose.model('User');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {

  async listAll(req, resp) {
    const listUsers = await User.find({});
    return resp.json(listUsers);
  },

  create(req, resp) {
    let user = new User(req.body);
    user.password = bcrypt.hashSync(req.body.password, 10);
    User.create(user).then((user) => {
      return resp.status(200).json({
        message: user
      })
    }).catch((err) => {
      return resp.send(err);
    });
  },

  login(req, resp) {
    User.findOne({
      username: req.body.username
    }, function (err, user) {
      if (err) throw err;
      if (!user) {
        return resp.status(401).json({ message: 'sdfsd' });
      } else if (user) {
        if (!user.comparePassword(req.body.password)) {
          return resp.status(401).json({ message: 'Senha inválida' })
        } else {
          return resp.json({ token: jsonwebtoken.sign({ username: user.username, fullName: user.fullName, _id: user._id }, 'RESTFULAPIs') });
        }
      }
    })
  }

}
