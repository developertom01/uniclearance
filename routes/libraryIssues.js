const express = require("express");
const passport = require("passport");
const router = express.Router();
const controller = require("../controllers/libraryIssuesController");
const issuesValidator = require("../middleware/validation/issuesValidator");
const librayAdminOnly = require("../middleware/permissions/libraryAdmin");

router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    librayAdminOnly,
    controller.index
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    librayAdminOnly,
    issuesValidator,
    controller.create
  );

router.get(
  "/:adminId",
  passport.authenticate("jwt", { session: false }),
  librayAdminOnly,
  controller.retreive
);
router.delete(
  "/:adminId",
  passport.authenticate("jwt", { session: false }),
  librayAdminOnly,
  controller.deleteIssue
);
router.patch(
  "/:adminId",
  passport.authenticate("jwt", { session: false }),
  librayAdminOnly,
  controller.update
);
module.exports = router;
