const axios = require('axios');
const externApi = require('../config/extern-api');

module.exports = {

  async getAll(req, resp) {
    console.log(req.query.page);
    if (req.query.page === null) {
      req.query.page = 1;
    }
    if (req.query.size === null) {
      req.query.size = 5;
    }
    const beers = await axios.get(`${externApi.api}?page=${req.query.page}&per_page=${req.query.size}`);
    return resp.json(beers.data);
  },

  async getById(req, resp) {
    const beers = await axios.get(`${externApi.api}/${req.params.id}`);
    return resp.json(beers.data);
  }
}