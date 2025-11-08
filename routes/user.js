const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const passport = require("passport");
const { saveRedirectUrl } = require("../middlewares");
const User = require("../models/user");

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


router.get("/profile/:id", wrapAsync( async(req, res) => {
  try{
    let {id} = req.params;
    let userprofile = await User.findById(id);
    res.render("users/profile.ejs",{userprofile});
  }catch{
    req.flash("error", "Something went wrong !");
    res.redirect("/orvane");
  }
}))

router.get("/postprofile/:id", wrapAsync( async(req, res) => {
   try{
    let {id} = req.params;
    res.render("users/postprofile.ejs",{id});
  }catch{
    req.flash("error", "Something went wrong !");
    res.redirect("/orvane");
  }
}))

router.put("/postprofile/:id", wrapAsync( async(req, res) => {
  try{
    let {id} = req.params;
    console.log(id);
    let userProfileData = req.body;
    console.log(userProfileData);
    await User.findByIdAndUpdate(id,userProfileData);
    res.redirect(`/user/profile/${id}`);
  }catch{
    req.flash("error", "Something went wrong");
    res.redirect("/orvane");
  }
}))

router.get("/log-out", userController.logout);

module.exports = router;
