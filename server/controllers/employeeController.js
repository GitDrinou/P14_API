const employeeService = require('../services/employeeService')

// Layer application : Employee

// Create employee
module.exports.createEmployee = async (req, res) => {
    let response = {}

    try {
        const responseFromService = await employeeService.createEmployee(req.body)
        response.status = 200
        response.message = 'Employee successfully created'
        response.body = responseFromService
    } catch (err) {
        console.error('Something went wrong in employeeController file', err)
        response.status = 400
        response.message = err.message
    }

    return res.status(response.status).send(response)
}

// Get Employees
module.exports.getEmployees = async (req, res) => {
    let response = {}

    try {
        const responseFromService = await employeeService.getEmployees(req)
        response.status = 200
        response.message = 'Successfully get employee datas'
        response.body = responseFromService
    } catch (err) {
        console.log('Error in getEmployee from employeeController file')
        response.status = 400
        response.message = err.message
    }

    return res.status(response.status).send(response)
}

// Update employee
module.exports.updateEmployee = async (req, res) => {
    let response = {}

    try {
        const responseFromService = await employeeService.updateEmployee(req)
        response.status = 200
        response.message = 'Successfully updated employee data'
        response.body = responseFromService
    } catch (err) {
        console.log('Error in updateEmployee from employeeController file')
        response.status = 400
        response.message = err.message
    }

    return res.status(response.status).send(response)
}