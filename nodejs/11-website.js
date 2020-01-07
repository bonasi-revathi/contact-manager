var http = require("http");
let homeTemplate = 
`<html>
    <head>
        <title>Trying NodeJS Http</title>
    </head>
    <body>
    <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
    </ul>
    <h1>Welcome to Home Page</h1>
    </body>
</html>`;

let aboutTemplate = 
`<html>
    <head>
        <title>Trying NodeJS Http</title>
    </head>
    <body>
    <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
    </ul>
    <h1>Learn morea about us</h1>
    </body>
</html>`;

http
  .createServer((req, res) => {
    console.log("Server created");
    console.log(req.url);
    switch(req.url){
        case '/':
          res.writeHead(200, {"Content-Type": "text/html"});  
          res.write(homeTemplate);  
        case '/about':
          res.writeHead(200, {"Content-Type": "text/html"});  
          res.write(aboutTemplate);  
      }
    res.end();
  })
  .listen(3000, () => {
    console.log("server started");
  });

