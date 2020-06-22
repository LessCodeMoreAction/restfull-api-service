var express = require('express')
var db = require('../db/index');




function getNASADATA(req, res, next) {
    db.any('SELECT * FROM MODIS')
    .then(function (data) {
        res.status(200)
          .json({
            message: 'NASA SATELLITE DATA SOURCE',
            data: data,
         
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }



module.exports = {
    getNASADATA: getNASADATA,
}



