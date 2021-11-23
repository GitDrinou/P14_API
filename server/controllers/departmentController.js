const dptService = require('../services/departmentService')

// Layer application : Department

// Create department
module.exports.createDepartment = async (req, res) => {
    let response = {}

    try {
        const responseFromService = await dptService.createDepartment(req.body)
        response.status = 200
        response.message = 'Department successfully created'
        response.body = responseFromService
    } catch (err) {
        console.error('Something went wrong in departmentController file', err)
        response.status = 400
        response.message = err.message
    }

    return res.status(response.status).send(response)
}

// Get Department
module.exports.getDepartment = async (req, res) => {
    let response = {}

    try {
        const responseFromService = await dptService.getDepartment(req)
        response.status = 200
        response.message = 'Successfully get department data'
        response.body = responseFromService
    } catch (err) {
        console.log('Error in getDepartment from departmentController file')
        response.status = 400
        response.message = err.message
    }

    return res.status(response.status).send(response)
}
