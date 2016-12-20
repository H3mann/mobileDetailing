
var db = require('../config/config.js')

exports.post = function(req, res) {
  var car = JSON.stringify(req.body.car)
  var colour = JSON.stringify(req.body.colour)
  var location = JSON.stringify(req.body.location)
  var time = JSON.stringify(req.body.time)
  console.log('COLOUR!!!!',colour)
	db.cypher({
    query: 'CREATE (n:Person { name: {car}, colour: {colour}, location: {location}, time: {time} } ) RETURN n',
    params: {car: car, colour: colour, location: location, time: time }
  }, function(err, result) {
    if(err) {
      console.log("err creating character", err)
      res.sendStatus(400);
    }
    else {(console.log('we good!'))}
	}
	)
}
    // params: {input: req.body}