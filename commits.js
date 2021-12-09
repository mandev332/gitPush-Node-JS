const { table } = require("console");
const fs = require("fs");

let base = fs.readFileSync("./.data/data.json", "utf-8");
let data = JSON.parse(base);
table(data);
