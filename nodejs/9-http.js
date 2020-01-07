var http = require('http');

http.createServer( (req, res) => {
  console.log("Server created"); 
  console.log(req.url);
  if(req.url == '/'){
      console.log("Inside home page")
    res.writeHead(200, {"Content-Type": "text/html"});  
    res.write('Welcome to home page');   
    res.end();
  }
    
}).listen(3000,() =>
{
    console.log("server started")
})