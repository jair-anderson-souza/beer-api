const express = require('express');

const routes = express.Router();
const Users = require('./controllers/UserController');
const Beers = require('./controllers/BeerController');

//login user
//new user
//list beer api -> with other params

routes.get('/users', Users.listAll);
routes.post('/users', Users.create);
routes.get('/beers', Beers.getAll);
routes.get('/beers/:id', Beers.getById);



module.exports = routes;