// nmp install give-me-a-joke
// nmp i give-me-a-joke
const gmaj = require("give-me-a-joke")
const colors = require("colors")
console.dir(gmaj);  // display functions

// Colors package added additional functionality to string object
gmaj.getRandomCNJoke((joke) => {console.log(joke.rainbow);
    gmaj.getRandomCNJoke((joke) => {console.log(colors.green(joke));
        gmaj.getRandomCNJoke((joke) => {console.log(colors.zebra(joke));
            gmaj.getRandomCNJoke((joke) => {console.log(colors.yellow(colors.underline(joke)));
                gmaj.getRandomCNJoke((joke) => {console.log(colors.red(colors.trap(joke)));});
            });
        });
    });
});
