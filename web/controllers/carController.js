
var db = require('../config/config.js')

exports.post = function(req, res) {
  console.log('REQUEST IN POST****',req.body)
	db.cypher({
    query: 'CREATE (n:UserInput { UserInput: {input} }) RETURN n',
    params: {input: req.body.hero}
  }, function(err, result) {
    if(err) {
      console.log("err creating character", err)
      res.sendStatus(400);
    }
	}
	)
}