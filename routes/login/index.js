'use strict';
const router = require('express').Router();
const requestPromise = require('request-promise');
const request = require('request');
const j = requestPromise.jar()
var rp = requestPromise.defaults({
  jar: j
});
// const Promise = require('bluebird');
// const winston = require('winston');
// const _ = require('lodash');

let cookieInfo;

function authenticate(domain,username,password){
  let urlString="https://" + domain + ".modelshop.com/modelshop/j_spring_security_check"
  let options = {
    method: "POST",
    uri: urlString,
    "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "cache-control": "no-cache"
                },
    form: {
            "j_username": username,
             "j_password": password
          },
    withCredentials:true
  };

  return rp(options)
    .then(function(parsedBody) {
      console.log(parsedBody);
      return parsedBody;
    })
    .catch(function(err) {
      console.log(rp.defaults.jar)
      console.log("there was an error?");
      if(err.statusCode===302){
        console.log(err.response.headers)
        return err.response.headers
      } else {
        console.log(err);
      }
    });
}

function login(domain,username,password){
  console.log("login:")
  console.log(j);
  let _url='https://'+domain+'modelshop.com/modelshop/api/account/user/'+username+'/login';
  var options = {
      method: 'POST',
      url: _url,
      headers:
       {
         'cache-control': 'no-cache',
         'content-type': 'application/x-www-form-urlencoded',
         'referer': 'https://app.modelshop.com/modelshop/'},
      form: { j_username: username, j_password: password },
      withCredentials:true,
      jar:j
    }

  return rp(options);

}

router.post('/', function(req, res) {
  console.log("local request query", req.body);
  let domain=req.body.domain
  let user=req.body.user;
  let pass=req.body.pass;
  // let _body = req.query;

  //need to JSON.stringify this?
  authenticate(domain,user,pass)
    .then(function(){

      return login(domain,user,pass)
              .then(function(res){
                res.send(res);
              })
              .catch(err=>{
                res.send(err);
              })
    })
});


module.exports = {router:router, rp:rp}

