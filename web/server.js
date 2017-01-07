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


app.use("*", express.static(__dirname + "/../src/"))

app.listen(3001, function(err) {
  if (err) console.log(err);
   console.log('Listening at port 3001');
});