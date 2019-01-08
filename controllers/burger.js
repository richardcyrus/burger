/**
 * Eat-Da-Burger!
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <richard.cyrus@rcyrus.com>
 */

const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Eat-Da-Burger!' });
});

module.exports = router;
