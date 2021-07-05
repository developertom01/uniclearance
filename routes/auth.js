const express = require("express")
const studentsOnly = require("../permissions/studentsOnly")
const router = express.Router()
const passport = require("passport")
const authController = require("../controllers/authController")
const nonStudentsOnly = require("../permissions/nonStudentsOnly")
const loginValidatation = require("../middleware/validation/login")

router.post(
    "/login/student",
    loginValidatation,
    passport.authenticate("local",{session:false}),
    studentsOnly,
    authController.login
)

router.post(
    "/login/admins",
   loginValidatation,  passport.authenticate("local",{session:false}),
    nonStudentsOnly,
    authController.login
)


module.exports = router