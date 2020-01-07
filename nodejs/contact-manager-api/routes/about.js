var express = require('express');
var router = express.Router();

/* GET about listing. */
router.get('/', function(req, res, next) {
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
          <h1>Welcome to AboutPage</h1>
          </body>
        </html>`
        ); 
});

module.exports = router;
