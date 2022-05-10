const { spawn } = require("child_process");

const pwd = spawn("pwd");

pwd.stdout.pipe(process.stdout);

const { HOME } = process.env;

const cat = spawn("cat", [`${HOME}/yarn.lock`]);
cat.stdout.pipe(process.stdout);

const shell = spawn("ls -al ~ | wc -l", { shell: true });
shell.stdout.pipe(process.stdout);
