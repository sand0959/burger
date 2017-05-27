var mysql = require('mysql');
var connection = mysql.createConnection({
	host: process.env.db_host || "localhost",
	user: process.env.db_user || "root",
	password: process.env.db_pw || "br22y79nn77",
	port: 3306,
	database: process.env.db || 'burgers_db'
});

connection.connect(function(err) {
	if (err) {
		console.error('Error connecting: ' + error.stack);
		return
	}
	console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;