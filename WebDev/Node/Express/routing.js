const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log("home page");
    res.send("Welcome Home");
});

// Type of request made when hitting enter in browser in URL
app.get("/lambo", (req, res) => {
    console.log("lambo request");
    res.send("Vroom Vroom");
});

app.post("/lambo", (req, res) => {
    res.send("POST request to lambo");
});

app.get("/bugati", (req, res) => {
    console.log("bugati request");
    res.send("prrrr prrrr");
});

// Query string
// Type: http://localhost:8080/search?q=dogs in URL
app.get("/search", (req, res) => {
    if (!res.q) {
        res.send("Nothing found. Nothing searched");
    } else {
        console.log(req.query);
        res.send(req.query.q);
    }
})

// Path Parameters. 
// We are not checking what subreddit must be.
app.get("/r/:subreddit", (req, res) => {
    res.send(`This is the ${req.params.subreddit} subreddit.`);
})

app.get("/r/:subreddit/comments/:postID", (req, res) => {
    res.send(`This is the ${req.params.subreddit} subreddit and postID is ${req.params.postID}.`);
})

// NOTE YOU CANOT PUT THIS AT THE TOP OF THE CODE
// BECAUSE YOU CAN ONLY HAVE ONE RESPONCE PER ROUTE
app.get("*", (req, res) => {
    res.send("route does not exist");
});

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080");
});


/* It's annoying to restart server each time we make changes. So we will install nodemon globally. */
// sudo npm install -g nodemon