
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
    
      db.cypher({
        query: 'MATCH (a:User { username: {username} }), (b:Person { name: {car}, colour: {colour}, location: {location}, time: {time} }) CREATE (a)-[:HAS_USERINPUT]->(b)',
        params: {username: req.session.user, car: car, colour: colour, location: location, time: time }
      }, function(err,result){
        if (err) {
          console.log("err in creating userinput relaiton",err)
          res.sendStatus(400)
        }
        console.log('userinput relation created')
        res.sendStatus(200)
      });
	 });
};
	

    // params: {input: req.body}
exports.get = function (req,res) {
console.log('inside get')
db.cypher({
  query: 'MATCH (a:User { username: {username} })-[:HAS_USERINPUT]-(car) RETURN car',
  params: {username: req.session.user}
}, function (err, results) {
  if (err) {
    console.log('err fetching userInput info',err)
    res.sendStatus(400)
  }
  if(results[0]) {
    console.log('THESE ARE RESULTS[0]',results[0])
  }
})
}






