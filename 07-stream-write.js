const fs = require("fs");

const file = fs.createWriteStream("./big.txt");

for (let i = 0; i <= 100; i++) {
    file.write("Lorem ipsum" + i + "\n");
}
