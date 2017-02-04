'use strict';
const router = require('express').Router();
const rp = require('../login').rp;
const request = require('request');

 //https://app.modelshop.com/modelshop/api/chart/viewcap/LandBank/data/Price%20Sensitivity%20Chart?_dc=1486227445150&attached=false&page=1&start=0&limit=25
//'set-cookie': [ 'JSESSIONID=9C09CADED4340FCDB684BCAD385432FE; Path=/modelshop/; HttpOnly' ]

// going to need some middleware that logs in...

module.exports = router


router.get('/', function(req,res){
  console.log("get:")
  console.log("local request query", req.query);
  //let username=req.query.user;


  const username = req.query.username;
  const model = req.query.model;
  const chart = req.query.chart;

  var options = {
      method: 'GET',
      url: 'https://app.modelshop.com/modelshop/api/chart/'+username+'/'+model+'/data/' + chart ,
      headers:
       {
         'cache-control': 'no-cache',
         'content-type': 'application/x-www-form-urlencoded'
       }
    }
  console.log(rp.defaults.jar)
  rp(options)
    .then(function(response) {
      //console.log(response);
      res.send(response);
    })
    .catch(function(err) {
      console.log("there was an error?");
      if(err.statusCode===302){
        console.log(err.response.headers)
        res.send(err.response.headers);
      } else {
        res.send(err);
      }
    });
})