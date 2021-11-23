const express = require('express')
const router = express.Router()
const dptController = require('../controllers/departmentController')

router.post('/create', dptController.createDepartment)

router.get('/list', dptController.getDepartment)

module.exports = router