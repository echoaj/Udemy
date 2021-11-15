// POST API file 
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require("body-parser");
const User = require("../../schemas/UserSchema");
const Post = require("../../schemas/PostSchema");


app.use(bodyParser.urlencoded({ extended: false }));


router.get("/", (req, res, next) => {

});


router.post("/", async (req, res, next) => {

    // In common.js we set data object to here.
    // Now we are checking if content exists.
    if(!req.body.content){
        console.log("Content param not sent with request");
        return res.sendStatus(400);
    }

    // We never have to pass info about the user that is logged in
    // Because that information is already stored in the session

    var postData = {
        content: req.body.content,
        postedBy: req.session.user
    }

    Post.create(postData)
    .then(async (newPost) => {
        // populates postedBy field with user's information
        newPost = await User.populate(newPost, {path:"postedBy"});
        res.status(201).send(newPost);
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(400);
    })

});

module.exports = router;