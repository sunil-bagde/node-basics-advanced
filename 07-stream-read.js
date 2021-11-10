/*
@see
https://stackabuse.com/reading-a-file-line-by-line-in-node-js/
*/
const fs = require("fs");
const readline = require("readline");
const file = fs.createReadStream("./big.txt");

const readInterface = readline.createInterface({
    input: file,
    output: process.stdout,
    console: false,
});

readInterface.on("line", function(line) {
    console.log(line);
});
