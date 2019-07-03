const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const mongoose = require('mongoose');

const requireDir = require('require-dir');
requireDir('./src/models');

const routes = require('./src/routes');

mongoose.connect('mongodb://127.0.0.1:27017/beer', {
  useNewUrlParser: true
});

app.use('/api', routes);

app.listen(3000);
