/**
 * Eat-Da-Burger!
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <richard.cyrus@rcyrus.com>
 */

const db = require('../config/orm');
const table = 'burgers';

const burger = {
    /**
     * Retrieve all records from the database and send the results to
     * the `callback`.
     *
     * @param callback
     */
    all: (callback) => {
        db.selectAll(table, (res) => callback(res));
    },

    /**
     * Create a new record in the database, and pass any status to the
     * `callback`
     *
     * @param value
     * @param callback
     */
    create: (value, callback) => {
        db.insertOne(table, 'burger_name', value, (res) => callback(res));
    },

    /**
     * Update a record in the database, and pass any status to the
     * `callback`
     *
     * @param value
     * @param callback
     */
    update: (value, callback) => {
        const values = {
            'devoured': true,
        };
        const criteria = {
            'id': value,
        };

        db.updateOne(table, values, criteria, (res) => callback(res));
    },
};

module.exports = burger;
