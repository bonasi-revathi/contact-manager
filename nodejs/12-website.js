var http = require ('http');

function getTemplate(params){
    return `<html>
    <head>
        <title>Trying NodeJS Http</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    <body>
    <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/contact'>Contact</a></li>
        <li><a href='/services'>Services</a></li>
        <li><a href='/product'>Product</a></li>

    </ul>
    <h1> welcome to ${params}</h1>
    </body>
</html>`
}


http
  .createServer((req, res) => {
    console.log("Server created");
    console.log(req.url);
    switch(req.url){
        case '/':
            res.writeHead(200, {"Content-Type": "text/html"});  
          res.write(getTemplate("home page"));  
          break; 
        case '/about':
          res.writeHead(200, {"Content-Type": "text/html"});  
          res.write(getTemplate("about page"));  
          break;
        case '/contact':
            res.writeHead(200, {"Content-Type": "text/html"});  
            res.write(getTemplate("contact page"));  
            break;
        case '/services':
            res.writeHead(200, {"Content-Type": "text/html"});  
            res.write(getTemplate("services page"));  
            break;
        case '/product':
          res.writeHead(200, {"Content-Type": "text/html"});  
          res.write(getTemplate("product page"));  
          break;
          default:
            res.writeHead(404, {"Content-Type": "text/html"});
            res.write("404 Not Found\n");
      }
    res.end();
  })
  .listen(3000, () => {
    console.log("server started");
  });
