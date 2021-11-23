const express = require('express')
const router = express.Router()
const stateController = require('../controllers/stateController')

router.post('/create', stateController.createState)

router.get('/list', stateController.getState)

module.exports = router