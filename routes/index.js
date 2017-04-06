'use strict';
const router = require('express').Router();

module.exports = router;

// example put registered routes here
// router.use('/members', require('./members'));

router.use('/login', require('./login').router);
router.use('/models', require('./models'));
router.use('/data', require('./data'));
router.use('/chartdata', require('./chartdata'));
// Make sure this is after all of
// the registered routes!

router.use(function (req, res) {
    res.status(404).end();
});
