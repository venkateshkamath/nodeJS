const { writeFile, readFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, res) => {
  if (err) console.log(err);
  const first = res;
  //second file

  readFile("./content/second.txt", "utf8", (err, res) => {
    if (err) console.log(err);
    const second = res;
    writeFile(
      "./content/result-async.txt",
      `This is to async file ${first} ${second}`,
      { flag: "a" },
      (err, res) => {
        if (err) return;
        console.log("writing done");
      }
    );
  });
});
