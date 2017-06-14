//var phrases = require('./ru');
var db = require("db");
var log = require('logger')(module);

db.connect();
function User(name){
	this.name = name;
}

User.prototype.hello = function(who){
	log(db.getPhrase("Hello") + ", " + who.name);
}

//exports.User = User;
module.exports = User;