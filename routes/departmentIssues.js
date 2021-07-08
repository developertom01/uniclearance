const express  = require("express")
const passport = require("passport")
const router = express.Router()
const departmentAdminPermission = require("../middleware/permissions/departmentAdminsOnly")
const departmentIssuesValidator = require("../middleware/validation/departmentIssues")
const controller = require("../controllers/departmentIsssuesController")

router.route("/")
.post(
    passport.authenticate("jwt",{session:false}),
    departmentAdminPermission,
    departmentIssuesValidator,
    controller.create
    )
.get(controller.index)


router.get("/student/issues/:studentUid",
controller.studentIssues)

router.patch("toggle_is_cleared/",
    passport.authenticate("jwt",{session:false}),
    departmentAdminPermission,
    controller.changeAsCleared
)