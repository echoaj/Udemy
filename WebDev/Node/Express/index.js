// Express Docs: https://expressjs.com/en/guide/routing.html
const express = require('express')
const app = express()

// There is different types of requests.
// Right now our app does not descriminate between different
// routes, GET, POST, or other types of requests.

// All requests comming in will execute call back below.
// Doesn't matter if it is a GET, POST, ect..
app.use((req, res) => {
    console.log("Request made");
    // Once you send something you are done. You can't sent another item.
    res.send("<h1>Website Response: Hello user, request accepted.</h1>")
    //res.send({"Alex": 26, "Josh":23})
})

app.get("/lambo", (req, res) => {
    console.log("lambo request");
})

app.listen(2500, () => {
    console.log("LISTENING ON PORT 2500");
})

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080");
})

// Can have different servers on different ports
// Ports are like address.  Different ones tend to refer
// Different stuff comming in like mail, http, ect..