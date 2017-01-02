'use strict';
const router = require('express').Router();

module.exports = router;

// example put registered routes here
// router.use('/members', require('./members'));

router.use('/login', require('./login').router);
router.use('/models', require('./models'));

// Make sure this is after all of
// the registered routes!

router.use(function (req, res) {
    res.status(404).end();
});
