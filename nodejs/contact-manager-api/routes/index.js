var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.url)
  res.send(`
  <html>
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
</html>`
);
});

module.exports = router;
