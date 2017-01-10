
var db = require('../config/config.js')
// var stripe = require("stripe")("sk_test_tEmQYNXutGTWHXvjST8IAkKm");

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
  var date = req.body.date
  //console.log('COLOUR!!!!',colour)
 
  client.messages.create({ 
    to: "+12015631783", 
    from: "+18623731932", 
    body: car + ' ' + colour + ' ' + location + ' ' + time + ' ' + date
      
  }, function(err, message) { 
    if (err) {console.log('error in sendingtext',err)}
      
    console.log('message',message); 
  }); 

}

exports.post = function(req, res) {
  var car = req.body.car
  var colour = req.body.colour
  var location = req.body.location
  var time = req.body.time
  var date = req.body.date
  console.log('COLOUR!!!!',colour)

  db.cypher({
    query: 'CREATE (n:Person { name: {car}, colour: {colour}, location: {location}, time: {time}, date: {date} } ) RETURN n',
    params: {car: car, colour: colour, location: location, time: time, date: date}
  }, function(err, result) {
    if(err) {
      console.log("err creating character", err)
      res.sendStatus(400);
    }
    
      db.cypher({
        query: 'MATCH (a:User { username: {username} }), (b:Person { name: {car}, colour: {colour}, location: {location}, time: {time}, date: {date} }) CREATE (a)-[:HAS_USERINPUT]->(b)',
        params: {username: req.session.user, car: car, colour: colour, location: location, time: time, date: date }
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
  console.log('RESULT',results)
  if (results[0] === undefined) {
    res.send(results)
  }
  if(results[0]) {
    console.log('THESE ARE RESULTS[0]',results[0])
    res.send(results[0])
  }
})
}



// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys

// Get the credit card details submitted by the form
// var token = request.body.stripeToken; // Using Express

// // Create a charge: this will charge the user's card
// var charge = stripe.charges.create({
//   amount: 1000, // Amount in cents
//   currency: "usd",
//   source: token,
//   description: "Example charge"
// }, function(err, charge) {
//   if (err && err.type === 'StripeCardError') {
//     // The card has been declined
//   }
// });






