import { createReadStream } from "fs";
import http from "http";
const server = http.createServer(async (req, res) => {
  console.log("method: ", req.method);

  if (req.url === "/" && req.method === "GET") {
    res.end("<h1>Product Deatils</h1>");
  } else if (req.url === "/products" && req.method === "GET") {
    res.writeHead(200, { "content-type": "text/json" });
    const stream = createReadStream("./data/products.json", {
      encoding: "utf-8",
    });
    stream.pipe(res);
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});
server.listen(5000, () => console.log("Program-10 is running at 5000..."));
