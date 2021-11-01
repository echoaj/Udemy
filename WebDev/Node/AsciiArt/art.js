const figlet = require("figlet");
const colors = require("colors");

let message = "USA"
figlet(message, function (err, data) {
    if (err) {
        console.log("Something went wrong....");
        console.dir(err);
        return;
    }
    console.log(colors.america(data));
});