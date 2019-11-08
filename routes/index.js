var express = require('express');
var router = express.Router();
var crunch = require("number-crunch");
var bigInt = require("big-integer");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../public/index.html', { title: 'Express' });
});

/* GET x modulo n*/
router.get('/modulo', function(req, res, next) {
  x = req.query.x;
  n = req.query.n;

  console.log(x + " modulo " + n);
  result = crunch.mod([bigInt(x)], [bigInt(n)])
  console.log(result);

  res.send(result);
});

/* GET x^e modulo n*/
router.get('/modexp', function(req, res, next) {
  x = req.query.x;
  e = req.query.e;
  n = req.query.n;

  console.log(x + "^" + e + " modulo " + n);
  result = crunch.exp([bigInt(x)], [bigInt(e)], [bigInt(n)])
  console.log(result);

  res.send(result);
});

/* GET x^-1 modulo n*/
router.get('/modinv', function(req, res, next) {
  x = req.query.x;
  n = req.query.n;

  console.log(x + " ^-1 modulo " + n);
  result = crunch.inv([bigInt(x)], [bigInt(n)]);
  console.log(result);

  if (result == null) {
    res.send(["undefined"]);
  }
  else {
    res.send(result);
  }
});

module.exports = router;
