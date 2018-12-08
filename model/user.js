var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	phone:String,
	password:String
});

var userModel = mongoose.model('user',userSchema,'user');

module.exports = userModel;