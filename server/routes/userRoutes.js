const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const tokenValidation = require('../middleware/tokenValidation')

router.post('/signup', userController.createUser)

router.post('/login', userController.loginUser)

router.post(
    '/details',
    tokenValidation.validateToken, 
    userController.getUser
)

router.put(
    '/details',
    tokenValidation.validateToken, 
    userController.updateUser
)

module.exports = router