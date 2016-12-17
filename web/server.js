var bodyParser = require('body-parser');
var cors = require("cors");
var express = require('express');

var session = require('express-session');

var app = express()

app.use(cors())
app.use(bodyParser())

app.use('/api',router)

app.use("*", express.static(__dirname + "/../src/"))