const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
const middleware = require('./middleware');
const bodyParser = require('body-parser');
const mongoose = require('./database');
const session = require('express-session');

const server = app.listen(port, () => console.log("Server listening on port " + port));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// SERVING STATIC FILES LIKE CSS
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
// Sessions are hashed. Set secret to any string and it will be hashed.
app.use(session({
    secret: "Droiga",
    resave: true,               // not sure what it does
    saveUninitialized: false    // not sure what it does
}))

// ROUTES
const loginRoute = require('./routes/loginRoutes');
const registerRoute = require('./routes/registerRoutes');
const logoutRoute = require('./routes/logoutRoutes');

app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/logout", logoutRoute);

// when root is accessed, first check if loggedin then do next step
app.get("/", middleware.requireLogin, (req, res, next) => {

    var payload = {
        pageTitle: "Home",
        userLoggedIn: req.session.user  // may be issue
    };

    res.status(200).render("home", payload);
});