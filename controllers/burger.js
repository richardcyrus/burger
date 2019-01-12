/**
 * Eat-Da-Burger!
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <richard.cyrus@rcyrus.com>
 */

const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

// Display the default page for the application.
router.get('/', (req, res) => {
    burger.all((data) => {
        const allBurgers = {
            burgers: data,
        };
        res.render('index', allBurgers);
    });
});

// Route handler to create a new record based on user submission.
router.post('/', (req, res) => {
    const burgerName = req.body.burgerName;

    burger.create(burgerName, () => {
        res.status(201).end();
    });
});

// Route handler to update a record when the `Devour It!` button is
// clicked.
router.put('/', (req, res) => {
    const id = req.body.id;

    burger.update(id, () => {
        res.status(201).end();
    });
});

module.exports = router;
