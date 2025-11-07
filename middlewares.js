module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        //redirect url saved
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in first!");
        return res.redirect("/user/log-in");
    }
     next();
}

module.exports.saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next()
};