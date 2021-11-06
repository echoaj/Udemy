const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
const middleware = require('./middleware');
const bodyParser = require('body-parser');

const server = app.listen(port, () => console.log("Server listening on port " + port));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// SERVING STATIC FILES LIKE CSS
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: false}));


// ROUTES
const loginRoute = require('./routes/loginRoutes');
const registerRoute = require('./routes/registerRoutes');
app.use("/login", loginRoute);
app.use("/register", registerRoute);

// when root is accessed, first check if loggedin then do next step
app.get("/", middleware.requireLogin, (req, res, next) => {

    var payload = {
        pageTitle: "Home"
    };

    res.status(200).render("home", payload);
});