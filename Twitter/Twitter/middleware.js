exports.requireLogin = (req, res, next) => {
    // checking if session is set on request 
    // and check if user property is set
    if(req.session && req.session.user){
        // if user is logged in we carry on
        return next();
    }else{
        // if user is not logged in we send them to the login page
        return res.redirect('/login')
    }
};