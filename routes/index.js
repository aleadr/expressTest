var express = require('express');
var router = express.Router();
var dotenv  = require('dotenv')

dotenv.config()

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send(process.env.TEXT001 || `Gagal`)
});

module.exports = router;
