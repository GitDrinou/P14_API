const stateService = require('../services/stateService')

// Layer application : state

// Create state
module.exports.createState = async (req, res) => {
    let response = {}

    try {
        const responseFromService = await stateService.createState(req.body)
        response.status = 200
        response.message = 'State successfully created'
        response.body = responseFromService
    } catch (err) {
        console.error('Something went wrong in stateController file', err)
        response.status = 400
        response.message = err.message
    }

    return res.status(response.status).send(response)
}

// Get State
module.exports.getState = async (req, res) => {
    let response = {}

    try {
        const responseFromService = await stateService.getState(req)
        response.status = 200
        response.message = 'Successfully get state data'
        response.body = responseFromService
    } catch (err) {
        console.log('Error in getState from stateController file')
        response.status = 400
        response.message = err.message
    }

    return res.status(response.status).send(response)
}
