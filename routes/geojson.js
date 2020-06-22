var express = require('express');
var router = express.Router();
var nasa = require('../nasa_data/getJson');


router.get('/', nasa.getNASADATAGeo);


module.exports = router;