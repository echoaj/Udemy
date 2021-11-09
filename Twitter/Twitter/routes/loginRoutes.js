const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const User = require("../schemas/UserSchema");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));

// This file here is not handling traffic to the server it is just
// handeling routes.

// when root is accessed, first check if loggedin then do next step
router.get("/", (req, res, next) => {
    res.status(200).render("login", { pageTitle: "Login" });
});

// handle post request
router.post("/", async (req, res, next) => {

    let payload = req.body;

    // we need bodyParser so we can get body from req
    if(req.body.logUsername && req.body.logPassword){
        try {
            var user = await User.findOne({ $or: [{ username: req.body.logUsername }, { email: req.body.logUsername }] });
            console.log(user);
            console.log("Query Successful");
        } catch (err) {
            console.log(err);
            payload.errorMessage = "Query Failed. Something went wrong.";
            res.status(200).render("login", payload);
        }

        // if true means user exists
        if (user != null){
            // compare password enterd in with password in db
            const isValid = await bcrypt.compare(req.body.logPassword, user.password);
            if(isValid){
                req.session.user = user;
                return res.redirect("/");
            }
        }
        payload.errorMessage = "Login credentials incorrect.";
        return res.status(200).render("login", payload);
        
    }
    payload.errorMessage = "Make sure each field has a valid value.";
    res.status(200).render("login", { pageTitle: "Login" });
});

module.exports = router;