const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
// Universally Unique Identifier
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny'
    },
    {
        id: uuid(),
        username: 'Jaden',
        comment: 'cool shirt bro'
    },
    {
        id: uuid(),
        username: 'Rick',
        comment: 'why did the chicken cross the road'
    },
    {
        id: uuid(),
        username: 'Amy',
        comment: 'I love to cut hair'
    },
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id:uuid() });
    // res.send("It works");
    res.redirect("/comments"); // default 302 status code
});

app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/show", { comment });
});

app.get("/comments/:id/edit", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/edit", { comment })
})

app.patch("/comments/:id", (req, res) => {
    const { id } = req.params;
    const newText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    // patch request can have a payload
    foundComment.comment = newText;
    res.redirect("/comments");
});

app.delete("/comments/:id", (req, res) => {
    const { id } = req.params;
    // instead of removing an array we are creating a new
    // array without the id.  copying is bettern than modifying
    comments = comments.filter(c => c.id != id);
    res.redirect("/comments");
});

app.listen(3000, () => {
    console.log("ON PORT 3000!");
});

