var http = require("http");

http
  .createServer((req, res) => {
    console.log("Server created");
    console.log(req.url);
    switch(req.url){
        case '/':
          res.writeHead(200, {"Content-Type": "text/html"});  
          res.write('welocome home');  
        case '/about':
          res.writeHead(200, {"Content-Type": "text/html"});  
          res.write(`<p>About</p>`);  
      }
    res.end();
  })
  .listen(3000, () => {
    console.log("server started");
  });
