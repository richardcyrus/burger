/**
 * Eat-Da-Burger!
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <richard.cyrus@rcyrus.com>
 */

const mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    require('dotenv').config();
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: 'burgers_db',
    });
}

connection.connect();

module.exports = connection;
