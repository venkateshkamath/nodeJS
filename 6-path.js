const path = require("path");
//gives the separator
console.log(path.sep);
//join to join the filename and creates a path

const filePath = path.join("/content", "/subfolder", "test.txt");
console.log(filePath);

//base name
const base = path.basename(filePath);
console.log(base);

//absolute path, works on from and to principle
const absPath = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absPath);
