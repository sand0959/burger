var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

	connection = mysql.createConnection({
	host: process.env.db_host || "localhost",
	user: process.env.db_user || "root",
	password: process.env.db_pw || "",
	database: process.env.db || 'burgers_db'
});
};
connection.connect(function(err) {
	if (err) {
		console.error('Error connecting: ' + error.stack);
		return
	}
	console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;