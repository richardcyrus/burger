/**
 * Eat-Da-Burger!
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <richard.cyrus@rcyrus.com>
 */

const mysql = require('mysql2')
let connection

if (process.env.MYSQL_URL) {
  connection = mysql.createPool({
      uri: process.env.MYSQL_URL,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
  })
} else {
  require('dotenv').config()
  connection = mysql.createPool({
      uri: process.env.MYSQL_URL,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
  })
}

// connection.connect()

module.exports = connection
