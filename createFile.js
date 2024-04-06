const fs = require("fs");

let data = "";

for (let i = 0; i < 1e6; i++) {
	data += `text: ${i}\n`;
}

fs.writeFileSync("big_file.txt", data);
