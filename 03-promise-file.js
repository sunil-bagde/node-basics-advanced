const { readFile } = require("fs").promises;
const fs = require("fs").promises;

async function main() {
    data = await readFile("./data.txt", "utf-8");

    await fs.writeFile("./data-copy-.txt", data + "\n Copy");
}

main();
