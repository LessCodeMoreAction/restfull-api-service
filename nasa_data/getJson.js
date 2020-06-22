var express = require('express')
var db = require('../db/index');
var GeoJSON = require('geojson');


// Function retrieves raw data from the firms data source

function getNASADATA(req, res, next) {
    db.any('SELECT * FROM MODIS LIMIT 100')
    .then(function (data) {
        res.status('200')
          .json({
            message: 'NASA SATELLITE DATA SOURCE',
            data: data,
         
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }



// This function parses the initial raw data into geojson format 
  
function getNASADATAGeo(req, res, next) {
    db.any('SELECT * FROM MODIS LIMIT 100')
    .then(function (results) {
        GeoJSON.parse(results, { Point: ['latidude', 'longitude']}, function(geojson){
            res.status('200')
            .json({
            
              geojson: geojson,
           
            });

        }) })

        .catch(function (err) {
         return next(err);
         })
        }









module.exports = {
    getNASADATA: getNASADATA,
    getNASADATAGeo: getNASADATAGeo
}



