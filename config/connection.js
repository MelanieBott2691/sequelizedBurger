// Set up MySQL connection.
var mysql = require("mysql");

// // JAWSdb connection
// var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "burger_db"
});
}

// Export connection for our ORM to use.
connection.connect();
module.exports = connection;
