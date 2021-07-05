var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

/* GET users listing. */
router
.route('/')
.get(usersController.index)
.post(usersController.create)

module.exports = router;
