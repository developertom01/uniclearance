var express = require('express');
const passport = require('passport');
var router = express.Router();
const usersController = require('../controllers/usersController')

/* GET users listing. */
router
.route('/')
.get(usersController.index)
.post(passport.authenticate("jwt",{session:false}),usersController.create)
module.exports = router;
