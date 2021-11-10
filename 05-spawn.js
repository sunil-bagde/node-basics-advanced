const { spawn } = require("child_process");
const pwd = spawn("pwd");
console.log("pwd", pwd);
pwd.stdout.pipe(process.stdout);
