var express = require('express');
const passport = require('passport');
var router = express.Router();
const usersController = require('../controllers/usersController');
const createUserValidator = require('../middleware/validation/users');

/* GET users listing. */
router
.route('/')
.get(usersController.index)
.post(passport.authenticate("jwt",{session:false}),createUserValidator,usersController.create)
module.exports = router;
