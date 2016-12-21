var bcrypt = require('bcrypt-nodejs');
var db = require('../config/config.js')

exports.createUser = function(req, res){
  console.log('createUserBody',req.body);
  var username = req.body.username;
  var password = req.body.password;

  db.cypher({
    query: 'MATCH (a:User) where a.username = {username} RETURN a',
    params: { username }
  }, function(err, result) {
    if(err) console.log('err', err);
    if(result.length === 0) {
      bcrypt.hash(password, null, null, function(err, hash) {
        db.cypher({
          query: 'CREATE (a:User { username: {username}, password: {hash} })',
          params: { username, hash }
        }, function(err, result) {
          if(err) console.log('err', err);
          req.session.regenerate(function(){
            req.session.user = req.body.username;
            res.sendStatus(201);
          });
        });
      })
    } else res.sendStatus(409);
  });
}