const userService = require('../services/userService')

// Layer application : User

// Create user
module.exports.createUser = async (req, res) => {
    let response = {}

    try {
        const responseFromService = await userService.createUser(req.body)
        response.status = 200
        response.message = 'User successfully created'
        response.body = responseFromService
    } catch (err) {
        console.error('Something went wrong in userController file', err)
        response.status = 400
        response.message = err.message
    }

    return res.status(response.status).send(response)
}

// Login user
module.exports.loginUser = async (req, res) => {
    let response = {}

    try {
        const responseFromService = await userService.loginUser(req.body)
        response.status = 200
        response.message = 'User successfully logged in'
        response.body = responseFromService
    } catch (err) {
        console.error('Error in loginUser from userController file')    
        response.status = 400
        response.message = err.message
    }

    return res.status(response.status).send(response)
}

// Get User
module.exports.getUser = async (req, res) => {
    let response = {}

    try {
        const responseFromService = await userService.getUser(req)
        response.status = 200
        response.message = 'Successfully get user data'
        response.body = responseFromService
    } catch (err) {
        console.log('Error in getUser from userController file')
        response.status = 400
        response.message = err.message
    }

    return res.status(response.status).send(response)
}

// Update User
module.exports.updateUser = async (req, res) => {
    let response = {}

    try {
        const responseFromService = await userService.updateUser(req)
        response.status = 200
        response.message = 'Successfully updated user data'
        response.body = responseFromService
    } catch (err) {
        console.log('Error in updateUser from userController file')
        response.status = 400
        response.message = err.message
    }

    return res.status(response.status).send(response)
}