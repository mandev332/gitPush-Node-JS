let fs = require("fs");
let readline = require("readline");
let path = require("path");
let [, , id] = process.argv;
let base = fs.readFileSync("./.data/data.json", "utf-8");
let data = JSON.parse(base);

for (let i of data) {
  if (i.id == id) {
    fs.writeFileSync(i.path, i.change);
  }
}
