/**
 * Eat-Da-Burger!
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <richard.cyrus@rcyrus.com>
 */

const connection = require('./connection');

const orm = {
    selectAll: (table, cb) => {},
    insertOne: (table, fields, values, cb) => {},
    updateOne: (table, values, criteria, cb) => {},
};

module.exports = orm;
