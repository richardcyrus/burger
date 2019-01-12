/**
 * Eat-Da-Burger!
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <richard.cyrus@rcyrus.com>
 */

const connection = require('./connection');

const orm = {
    /**
     * Return all rows from the specified table.
     *
     * @param {string} table The name of the table to update
     * @param {*} cb A callback reference for sending the data.
     */
    selectAll: (table, cb) => {
        const query = 'SELECT * FROM ??';
        connection.query(query, [table], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },

    /**
     * Add a record to the specified table.
     *
     * @param {string} table The name of the database table.
     * @param {string} fields The field(s) for which to add data.
     * @param {*} values The value(s) to add to the database table.
     * @param {*} cb A callback reference for any return data.
     */
    insertOne: (table, fields, values, cb) => {
        const query = 'INSERT INTO ?? (??) VALUES (?)';
        connection.query(query, [table, fields, values], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },

    /**
     * Update record(s) in the specified table.
     *
     * @param {string} table The name of the database table.
     * @param {object} values The columns and associated data to update.
     * @param {object} criteria The selection criteria for the update.
     * @param {*} cb A reference to a callback for any return data.
     */
    updateOne: (table, values, criteria, cb) => {
        const query = 'UPDATE ?? SET ? WHERE ?';
        connection.query(query, [table, values, criteria], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
};

module.exports = orm;
