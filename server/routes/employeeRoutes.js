const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employeeController')
const tokenValidation = require('../middleware/tokenValidation')

router.post('/new', employeeController.createEmployee)

router.get('/details', employeeController.getEmployees)

router.post('/details', employeeController.getAnEmployee)

router.put('/details', employeeController.updateEmployee)

module.exports = router