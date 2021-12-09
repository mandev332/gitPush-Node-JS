const fs = require("fs");

let base = fs.readFileSync("./.data/data.json", "utf-8");
let data = base ? JSON.parse(base) : [];
fs.writeFileSync("./.data/data.json", JSON.stringify(data, null, 4));

console.log("watching files...");

fs.watchFile(
  "watch.js",

  {
    bigint: false,
    persistent: true,
    interval: 1000,
  },
  (curr, prev) => {
    let main = fs.readFileSync("main.js", "utf8");
    let index = fs.readFileSync("index.js", "utf8");
    let index2 = fs.readFileSync("./src/index.js", "utf8");

    if (main != "") {
      let n = 0;
      for (let i of data) {
        if (i.change == main) {
          n = 1;
        }
      }
      if (n == 0) {
        let base = fs.readFileSync("./.data/data.json", "utf-8");
        let data = JSON.parse(base);
        let id_rand = Math.floor(Math.random() * 9000 + 1000);
        console.log(":file changed :main.js " + id_rand + "\n" + main);
        let obj = { id: id_rand, change: main, path: "main.js" };
        data.push(obj);
        fs.writeFileSync("./.data/data.json", JSON.stringify(data, null, 4));
      }
    } else {
      let arr = [];
      for (let i of data) {
        if (i.path == "main.js") {
          arr.push(i.change);
        }
      }
      if (arr[arr.length - 1] != main) {
        let base = fs.readFileSync("./.data/data.json", "utf-8");
        let data = JSON.parse(base);
        let id_rand = Math.floor(Math.random() * 9000 + 1000);
        console.log(":file changed :main.js " + id_rand + "\n" + main);
        let obj = { id: id_rand, change: main, path: "main.js" };
        data.push(obj);
        fs.writeFileSync("./.data/data.json", JSON.stringify(data, null, 4));
      }
    }
    if (index != "") {
      let n = 0;
      for (let i of data) {
        if (i.change == index) {
          n = 1;
        }
      }
      if (n == 0) {
        let base = fs.readFileSync("./.data/data.json", "utf-8");
        let data = JSON.parse(base);
        let id_rand = Math.floor(Math.random() * 9000 + 1000);
        console.log(":file changed :index.js " + id_rand + "\n" + index);
        let obj = { id: id_rand, change: index, path: "index.js" };
        data.push(obj);
        fs.writeFileSync("./.data/data.json", JSON.stringify(data, null, 4));
      }
    } else {
      let arr = [];
      for (let i of data) {
        if (i.path == "index.js") {
          arr.push(i.change);
        }
      }
      if (arr[arr.length - 1] != index) {
        let base = fs.readFileSync("./.data/data.json", "utf-8");
        let data = JSON.parse(base);
        let id_rand = Math.floor(Math.random() * 9000 + 1000);
        console.log(":file changed :index.js " + id_rand + "\n" + index);
        let obj = { id: id_rand, change: index, path: "index.js" };
        data.push(obj);
        fs.writeFileSync("./.data/data.json", JSON.stringify(data, null, 4));
      }
    }
    if (index2 != "") {
      let n = 0;
      for (let i of data) {
        if (i.change == index2) {
          n = 1;
        }
      }
      if (n == 0) {
        let base = fs.readFileSync("./.data/data.json", "utf-8");
        let data = JSON.parse(base);
        let id_rand = Math.floor(Math.random() * 9000 + 1000);
        console.log(":file changed :./src/index.js" + id_rand + "\n" + index2);
        let obj = { id: id_rand, change: index2, path: "./src/index.js" };
        data.push(obj);
        fs.writeFileSync("./.data/data.json", JSON.stringify(data, null, 4));
      }
    } else {
      let arr = [];
      for (let i of data) {
        if (i.path == "./src/index.js") {
          arr.push(i.change);
        }
      }
      if (arr[arr.length - 1] != index2) {
        let base = fs.readFileSync("./.data/data.json", "utf-8");
        let data = JSON.parse(base);
        let id_rand = Math.floor(Math.random() * 9000 + 1000);
        console.log(":file changed :./src/index.js" + id_rand + "\n" + index2);
        let obj = { id: id_rand, change: index2, path: "./src/index.js" };
        data.push(obj);
        fs.writeFileSync("./.data/data.json", JSON.stringify(data, null, 4));
      }
    }
  }
);
