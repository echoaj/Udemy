const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// This file here is not handling traffic to the server it is just
// handeling routes.

// when root is accessed, first check if loggedin then do next step
router.get("/", (req, res, next) => {
    res.status(200).render("login", { pageTitle: "nigger" });
});

module.exports = router;