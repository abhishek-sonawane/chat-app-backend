const express = require('express');
const router = express.Router();
const homeRoute = require('./home.routes');



router.use('/',homeRoute)

module.exports = router;