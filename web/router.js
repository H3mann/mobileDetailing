var router = require('express').Router();
var carController = require('./controllers/carController')

router.post('/carInput',carController.post)





module.exports = router