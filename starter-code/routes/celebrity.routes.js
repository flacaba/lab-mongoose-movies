const express = require('express');
const router  = express.Router();
const celebrityController = require('../controllers/celebrity.controller')

/* GET home page */
router.get('/', celebrityController.list);

module.exports = router;
