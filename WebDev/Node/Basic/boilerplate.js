
const fs = require("fs");


// Two different was to creating files. Synchronously and Asynchronously
// Synchronously will block all other code from running.

const fileName = process.argv[2] || 'Project';

var html = '\n' +
'<!DOCTYPE html>\n' +
'<html lang="en">\n' +
'<head>\n' +
'\t<meta charset="UTF-8">\n' +
'\t<meta http-equiv="X-UA-Compatible" content="IE=edge">\n' +
'\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
'\t<title>Document</title>\n' +
'</head>\n' +
'<body>\n\n' +
'</body>\n' +
'</html>\n'

function createBoilder() {
    fs.mkdir(fileName, { recursive: true }, (err) => {
        console.log("Creating directory.");
        if (err) throw err;
    });
    fs.writeFile(`${fileName}/index.html`, html, (err) => {
        console.log("Creating HTML file.");
        if (err) throw err;
    });
    fs.writeFile(`${fileName}/style.css`, ":root{\n\n}", (err) => {
        console.log("Creating CSS file.");
        if (err) throw err;
    });
    fs.writeFile(`${fileName}/script.js`, "", (err) => {
        console.log("Creating JavaScript file.");
        if (err) throw err;
    });
}

createBoilder();