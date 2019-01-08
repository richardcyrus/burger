/**
 * Eat-Da-Burger!
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <richard.cyrus@rcyrus.com>
 */

const db = require('../config/orm');
const table = 'burgers';

const burger = {
    all: (callback) => {
        db.selectAll(table, (res) => callback(res));
    },
    create: (fields, values, callback) => {
        db.insertOne(table, fields, values, (res) => callback(res));
    },
    update: (values, criteria, callback) => {
        db.updateOne(table, values, criteria, (res) => callback(res));
    },
};

module.exports = burger;
