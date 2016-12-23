var router = require('express').Router();
var carController = require('./controllers/carController')
var authController = require ('./controllers/authController')

router.post('/carInput',carController.post)
// router.post('/signup',authController.post)
router.get('/inputData', carController.get)





module.exports = router