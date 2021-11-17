const jwt = require('jsonwebtoken')
const { restart } = require('nodemon')

module.exports.validateToken = (req, res, next) => {
    let response = {}

    try {
        if (!req.headers.authorization) {
            throw new Error('Token is missing in headers')
        }

        const userToken = req.headers.authorization.split('Bearer')[1].trim()
        const decodedToken = jwt.verify(
            userToken,
            process.env.SECRET_KEY || 'default-secret-key'
        )

        return next()

    } catch (err) { 
        console.error('Error in tokenValidation file', err)
        response.status = 400
        response.message = err.message
    }

    return res.status(response.status).send(response)
}