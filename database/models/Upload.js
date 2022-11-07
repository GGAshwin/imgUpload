var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
	name: String,
	desc: String,
	img:
	{
		data: Buffer,
		contentType: String
	}
});

//Image is a model which has a schema imageSchema
// Name of export model and variable in server must be the same

module.exports = new mongoose.model('imgModel', imageSchema);
