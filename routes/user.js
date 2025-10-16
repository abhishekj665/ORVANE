const express = require("express");
const router = express.Router();
const User = require("../models/user");

const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const passport = require("passport");

const {saveRedirectUrl} = require("../middlewares");

router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
})

router.post("/signup",saveRedirectUrl, async(req, res) => {
    try{
        let {username, email, password} = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);
        console.log(`new user : ${registeredUser.username}`);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash("success", `Welcome to Orvane Digitals ${username}`);
            res.redirect(res.locals.redirectUrl);
        });
    }catch(e){
        req.flash("error", "user already existed");
        res.redirect("/user/signup");
    }
})

router.post("/login",saveRedirectUrl, passport.authenticate("local", {failureRedirect : "/user/log-in", failureFlash : true}), async (req, res) => {
    let {username} = req.body;
    req.flash("success", `Welcome back to Orvane Digitals ${username}`);
    let redirectUrl = res.locals.redirectUrl || "/orvane";
    res.redirect(redirectUrl);
})

// router.get("/", (req, res) => {
//   res.render("layouts/boilerplate", { user: req.user || null });
// })


router.get("/log-in", (req, res) => {
  res.render("users/login.ejs", {user : req.user});
})


router.get("/log-out", (req, res) => {
    req.logOut((err) => {
        if(err){
            req.flash("error", "Something went wromg");
            res.redirect("/");
        }
        req.session.destroy((err) => {
            if(err){
                req.flash("error", "Something went wrong for session");
                res.redirect("/");
            }
            res.clearCookie('connect.sid');
            res.redirect("/orvane/log-in");
        })
    })
})

module.exports = router;