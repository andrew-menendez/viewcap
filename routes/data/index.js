'use strict';
const router = require('express').Router();
const rp = require('../login').rp;
const request = require('request');


//'set-cookie': [ 'JSESSIONID=9C09CADED4340FCDB684BCAD385432FE; Path=/modelshop/; HttpOnly' ]

// going to need some middleware that logs in...

module.exports = router


router.get('/', function(req,res){
  console.log("get:")
  console.log("local request query", req.query);
  //let username=req.query.user;


  const username = req.query.username;
  const model = req.query.model;
  const dataset = req.query.dataset;

  var options = {
      method: 'GET',
      url: 'https://app.modelshop.com/modelshop/api/data/'+username+'/'+model+'/'+dataset,
      headers:
       {
         'cache-control': 'no-cache',
         'content-type': 'application/x-www-form-urlencoded'
       }
    }
  console.log(rp.defaults.jar)
  rp(options)
    .then(function(response) {
      console.log(response);
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