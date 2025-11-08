const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const passport = require("passport");
const { saveRedirectUrl } = require("../middlewares");
const User = require("../models/user");

const userController = require("../controllers/user");

const {isLoggedIn} = require("../middlewares");

const multer = require("multer");
const { storage } = require("../CloudinaryConfig");
const upload = multer({ storage });

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


router.route("/profile/:id").get(isLoggedIn, userController.profile);

router
  .route("/postprofile/:id")
  .get(isLoggedIn, userController.postprofilepage)
  .put(upload.single("resume"), isLoggedIn, userController.uploadprofile);


router.get("/log-out", userController.logout);

module.exports = router;
