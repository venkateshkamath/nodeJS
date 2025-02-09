const { readFileSync, writeFileSync } = require("fs");

// this is sync => one after the other
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// Now after reading, you print in the file, by default write will append, you intro a flag, 'a'=> A IS APPEND

writeFileSync("./content/result-sync.txt", `This is ${first} ${second} from files`, { flag: "a" });

writeFileSync("./content/result-sync.txt", `This is ${first} ${second} from files`, { flag: "a" });
