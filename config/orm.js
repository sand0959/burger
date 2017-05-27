var connection = require('../config/connection.js');


function printQuestioMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}
    function objToSql(ob) {
        var arr = [];
        for (var key in ob) {
            if (Object.hasOwnProperty.call(ob, key)) { 
            arr.push(key + '=' + ob[key]);
        }
    }
    return arr.toString();
}


var orm = {

    selectAll: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = 'INSERT INTO ' + table;
        var queryString = queryString + ' (';
        var queryString = queryString + cols.toString();
        var queryString = queryString + ') ';
        var queryString = queryString + 'VALUES (';
        var queryString = queryString + printQuestioMarks(vals.length);
        var queryString = queryString + ') ';
        console.log(queryString);
        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
   		var queryString = 'UPDATE ' + table;
        var queryString = queryString + ' SET ';
        var queryString = queryString + objToSql(objColVals);
        var queryString = queryString + ' WHERE ';
        var queryString = queryString + condition;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
        	if (err) throw err;
        	cb(result);
        });
    }
};

module.exports = orm;
