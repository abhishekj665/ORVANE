const User = require("../models/user");
const { saveRedirectUrl } = require("../middlewares");

module.exports.renderSignUpPage = (req, res) => {
  res.render("users/signup.ejs");
} 


module.exports.signup =  async(req, res) => {
    try{
        let {username, email, password} = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);
        console.log(`new user : ${registeredUser.username}`);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash("success", `Welcome to Orvane Digitals ${username}`);
            res.redirect("/orvane");
        });
    }catch(e){
        req.flash("error", "user already existed");
        res.redirect("/user/signup");
    }
}

module.exports.renderLogInPage =  (req, res) => {
  res.render("users/login.ejs", {user : req.user});
}


module.exports.login = async (req, res) => {
    let {username} = req.body;
    req.flash("success", `Welcome back to Orvane Digitals ${username}`);
    let redirectUrl = res.locals.redirectUrl || "/orvane";
    res.redirect(redirectUrl);
}

module.exports.logout =  (req, res) => {
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
}