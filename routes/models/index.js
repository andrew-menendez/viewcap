'use strict';
const router = require('express').Router();
const rp = require('../login').rp;
const request = require('request');


//'set-cookie': [ 'JSESSIONID=9C09CADED4340FCDB684BCAD385432FE; Path=/modelshop/; HttpOnly' ]


module.exports = router


router.get('/', function(req,res){
  console.log("get:")
  console.log("local request query", req.query);
  console.log("local request header", req.headers);
  let username=req.query.user;

  console.log("username is ", username);

  var options = {
      method: 'GET',
      url: 'https://app.modelshop.com/modelshop/api/models/'+username,
      headers:
       {
         'cache-control': 'no-cache',
         'content-type': 'application/x-www-form-urlencoded'
       }
    }

  rp(options)
    .then(function(response) {

      console.log(response);
      res.send(response);
    })
    .catch(function(err) {
      console.log(rp.defaults.jar)
      console.log("there was an error?");
      if(err.statusCode===302){
        console.log(err.response.headers)
        res.send(err.response.headers);
      } else {
        console.log(err);
      }
    });
})