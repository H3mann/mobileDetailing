
var db = require('../config/config.js')

 // Twilio Credentials 
 
//require the Twilio module and create a REST client 
 

exports.textInfo = function(req,res) {
var accountSid = 'ACf90dd4339cece0f6ff2ede2d841fdfb6'; 
var authToken = '24bd61113598e15a6b46e9a96be4f1db'; 
var client = require('twilio')(accountSid, authToken); 
  var car = req.body.car
  var colour = req.body.colour
  var location = req.body.location
  var time = req.body.time
  console.log('COLOUR!!!!',colour)
 console.log('INSIDE TEXT INFO')
  client.messages.create({ 
    to: "+12015631783", 
    from: "+18623731932", 
    body: car + ' ' + colour + ' ' + location + ' ' + time
      
  }, function(err, message) { 
    if (err) {console.log('error in sendingtext',err)}
      
    console.log('message',message); 
  }); 

}






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
    console.log('THESE ARE RESULTS[0]',results)
    res.send(results[0])
  }
})
}






