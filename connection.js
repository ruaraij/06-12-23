var mysql = require("mysql");

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"http@1976",
    database:"sync"
});

module.exports = con;