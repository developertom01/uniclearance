const express = require("express")
const passport = require("passport")
const controller = require("../controllers/libraryClearanceController")
const studentsOnly = require("../middleware/permissions/studentsOnly")

const router = express.Router()


router.route("/")
.get(controller.index)

router
.get(
    "/clear",
    passport.authenticate("jwt",{session:false}),
    studentsOnly,
    controller.slefClear   
)

module.exports = router