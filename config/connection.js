/**
 * Eat-Da-Burger!
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <richard.cyrus@rcyrus.com>
 */

const mysql = require('mysql2')
let connection

if (process.env.MYSQL_URL) {
  connection = mysql.createConnection(process.env.MYSQL_URL)
} else {
  require('dotenv').config()
  connection = mysql.createConnection(process.env.MYSQL_URL)
}

connection.connect()

module.exports = connection
