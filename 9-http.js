const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("This is our home page");
  else if (req.url === "/about") res.end("This is about page");
  else
    res.end(
      `<h1> OOPS</h1><p>This is not the page you are looking for</p><a href="/">back home</a>`
    );
});

server.listen(5000);
