// need to install ejs but don't need to require it
// express will require EJS behind the sceens

// By default when using a template view engine like EJS 
// express will expect to find the templates in a folder 
// called 'views'.  But it is possible to change that path
const express = require('express');
const app = express();


// Issue where if you try to run nodemon EJS/index.js
// You will get an error because views tries to look for
// views folder in that directoy which does not exist
// so we merge directory path to /views_foldername
const path = require('path');
app.set('views', path.join(__dirname, '/views'));


// Serving static files. Can call file static instead of public
app.use(express.static(path.join(__dirname, '/public')));

// Setting ejs view engine
app.set('view engine', 'ejs');

app.get(['/', '/home'], (req, res) => {
    // Now I can render a view
    // Don't need to set ./views/home.ejs because views is
    // the defaul place it looks. It assumbes it exists.
    // don't need .ejs. cause will look for that file already
    res.render("home", {title:"Home"});
});

app.get(['/random', '/rand'], (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { randNum: num, title:"Random" });
});

app.get('/dogs', (req, res) => {
    const dogs = ["fluffy", "dogo", "randy", "growlboy"];
    res.render('dogs', { dogs, title:"Dogs" });
});
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
});
