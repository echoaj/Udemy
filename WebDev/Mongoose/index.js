// Reference: https://mongoosejs.com/
/* ON WEBSITE
// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}
*/

const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/movieApp');
}

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

// name of model must be singular and uppercase.
// very important.  collection will be the name lowercase and in plural.
const Movie = mongoose.model('Movie', movieSchema);   // collection will be movies
// const cloudAtlas = new Movie({  title: 'Cloud Atlas',
//                                 year: 2012,
//                                 score: 9.3,
//                                 ratingg: "R"
//                             })
// cloudAtlas.save();
Movie.insertMany([
    {title: 'Cloud Atlas', year: 2012, score: 9.3, ratingg: "R"},
    {title: 'Titanic', year: 1998, score: 9.7, ratingg: "PG-13"},
    {title: 'Transformers', year: 2006, score: 8.1, ratingg: "PG-13"},
    {title: 'Frozen', year: 2015, score: 9.0, ratingg: "PG"},
]).then(data => {
    console.log("It Worked");
    console.log(data);
})

/*
On mongo side:
> mongo
> use movieApp
> db.movies.find() 
*/