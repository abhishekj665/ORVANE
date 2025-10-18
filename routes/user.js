const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const passport = require("passport");
const { saveRedirectUrl } = require("../middlewares");

const userController = require("../controllers/user");

router
  .route("/signup")
  .get(userController.renderSignUpPage)
  .post(saveRedirectUrl, userController.signup);

router
  .route("/log-in")
  .get( userController.renderLogInPage)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/user/log-in",
      failureFlash: true,
    }),
    userController.login
  );

router.get("/log-out", userController.logout);

module.exports = router;
