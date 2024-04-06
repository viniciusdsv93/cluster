const fs = require("fs");

const rs = fs.createReadStream("big_file.txt");
const ws = fs.createWriteStream("small_file.txt");
rs.pipe(ws);
