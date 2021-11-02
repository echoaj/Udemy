exports.requireLogin = (req, res, next) => {
    // checking if session is set on request 
    // and check if user property is set
    if(req.session && req.session.user){
        return next();
    }else{
        return res.redirect('/login')
    }
};