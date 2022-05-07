const fs = require("fs");
const { readFile : readFilePromise } = require("fs").promises;

const util = require("util");

const readFile = util.promisify(fs.readFile);

async function usingUtils() {
  const data = await readFile(__dirname+"/README.md", "utf-8")
  console.log("data", data);
}

async function usingPromises() {
  const data = await readFilePromise(__dirname+"/README.md", "utf-8")
  console.log("data", data);
}
console.log("Using util promises");
usingUtils();

console.log("Using fs.promises");
usingPromises();
