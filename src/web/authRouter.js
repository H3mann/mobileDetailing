var router = require('express').Router();

var authController = require ('./controllers/authController')


router.post('/signup',authController.createUser)
router.post('/login/', authController.checkPassword)
router.post("/isauth", authController.checkUser, (req, res) => res.sendStatus(200));
router.post("/logout", authController.destroySession);

module.exports = router