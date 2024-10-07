const router = require('express').Router();
const {login,logout} = require('../controllers/authController');



// function for login of user
router.post('/login',login)
// function for logout of user
router.delete('/loguot',logout)



module.exports =  router 