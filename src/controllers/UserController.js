const mongoose = require('mongoose');

const Users = mongoose.model('User');

module.exports = {

	async listAll(req, resp) {
		const listUsers = await Users.find({});
		return resp.json(listUsers);
	},

	async create(req, resp) {
		const user = await Users.create(req.body);
		return resp.json(user);
	}

}
