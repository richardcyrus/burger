/**
 * Eat-Da-Burger!
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <richard.cyrus@rcyrus.com>
 */

require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'burgers_db',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database!\n', err.stack);
        return;
    }
    console.log(`Connected with thread id ${connection.threadId}`);
});

module.exports = connection;
