var bodyParser = require('body-parser');
var cors = require("cors");
var express = require('express');
var router = require('./router.js');
var authRouter = require('./authRouter.js')

var session = require('express-session');

var app = express()

app.use(cors())
app.use(bodyParser())

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));
app.use("/", authRouter);
app.use('/api',router)


console.log('here')
// app.post('/carInput',function (req,res)  {
//    console.log('inside app.get!!*',req)

//    // var reqURL = 'https://www.reddit.com/r/' + req.query.queryData + '.json'
//    // var options = { method: 'GET', uri: reqURL};

//   // request(options, (error, response, body) => {
//   //      if (error) throw new Error(error);
//   //      res.send(body);
//   // });

// })

app.use("*", express.static(__dirname + "/../src/"))

app.listen(3001, function(err) {
  if (err) console.log(err);
   console.log('Listening at port 3001');
});