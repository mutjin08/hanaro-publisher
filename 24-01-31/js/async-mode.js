let fs = require("fs");

let result = fs.readFileSync("async-mode.js", "utf-8", (err, data) => {
  if (err != null) {
    console.log(err);
    return;
  }
  console.log(data);
  console.log("....ending");
});