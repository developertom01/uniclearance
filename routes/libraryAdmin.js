const express = require("express")
const passport = require("passport")
const controller = require("../controllers/libraryAdminController")
const libraryAdminOrSuperAdminOnly = require("../middleware/permissions/libraryAdminOrSuperAdminOnly")
const createAdminsValidator = require("../middleware/validation/createAdmins")

const router = express.Router()

router.get("/", controller.index)

router.post("/",
passport.authenticate("jwt",{session:false}),
libraryAdminOrSuperAdminOnly,
createAdminsValidator,
controller.create
)




module.exports = router