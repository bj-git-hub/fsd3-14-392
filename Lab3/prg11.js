// Routes
import { log } from "console";
import http from "http";

const server = http.createServer((req, res) => {

    if(req.url === '/' && req.method === 'GET'){
        res.end("This is the home page.");
        
    }
    else if(req.url === '/product' && req.method === 'GET'){
        const products = [
          {
            id: 1,
            name: "mobile",
            price: 2000,
          },
          {
            id: 2,
            name: "duster",
            price: 200,
          },
        ];
        res.end(JSON.stringify(products));
    }
    else if(req.url === '/product' && req.method === 'POST'){
        // retrieve data from client
        let body ="";
        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end,()")
        res.end("Add Product");
    }
    else if(req.url === '/product' && req.method === 'PUT'){
        res.end("Update Product");
    }
    else if(req.url === '/product' && req.method === 'DELETE'){
        res.end("Remove Product");
    }
    else{
        res.statusCode = 404;
        res.end("Not Found");
    }
   

});

server.listen(3000, () => console.log("Program 11 is running"));
