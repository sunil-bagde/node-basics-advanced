const os = require("os");

console.log("Os platform ", os.platform())
console.log("Os CPU 32 or 64", os.arch())
console.log("Os CPU core", os.cpus().length)
console.log("Home dir", os.homedir())
console.log("Line1 "+ os.EOL+ "Line 2 " +  os.EOL+ "Line 3");

