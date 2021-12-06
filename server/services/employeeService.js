const Employee = require('../database/models/employeeModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Layer application : Employee

// Create Employee
module.exports.createEmployee = async serviceData => {
    try {
        const employee = await Employee.findOne({
            firstName: serviceData.firstName,
            lastName: serviceData.lastName,
            birthDate: serviceData.birthDate
        })

        if (employee) {
            throw new Error('Employee already exists')
        }

        const newEmployee = new Employee ({
            firstName: serviceData.firstName,
            lastName: serviceData.lastName,
            birthDate: serviceData.birthDate,
            startDate: serviceData.startDate,
            street: serviceData.street,
            city: serviceData.city,
            state: serviceData.state,
            zipCode: serviceData.zipCode,
            department: serviceData.department
        })

        let result = await newEmployee.save()

        return result

    } catch (err) {
        console.error('Error in employeeService file', err)
        throw new Error(err)
    }
}

// Get Employees
module.exports.getEmployees = async serviceData => {
    try {
        const employees = await Employee.find()

        if (!employees) {
            throw new Error('No employees in database')
        }

        return employees
    } catch (err) {
        console.error('Error in employeeService file', err)
        throw new Error(err)
    }
}

// Get an Employee
module.exports.getAnEmployee = async serviceData => {
    
    try {
        const employee = await Employee.findOne({ _id: serviceData.body.id })

        if (!employee) {
            throw new Error('Employee not found')
        }
        return employee.toObject()
    } catch (err) {
        console.error('Error in employeeService file', err)
        throw new Error(err)
    }
}


// Update Employee
module.exports.updateEmployee = async serviceData => {
    try {
        const employee = await Employee.findOneAndUpdate(
            { _id: serviceData.body.id},
            {
                lastName: serviceData.body.lastName,
                street: serviceData.body.street,
                city: serviceData.body.city,
                state: serviceData.body.state,
                zipCode: serviceData.body.zipCode,
                department: serviceData.body.department
            },
            { new: true}
        )

        if (!employee) {
            throw new Error('Employee not found')
        }

        return employee.toObject()
        
    } catch (err) {
        console.error('Error in employeeService file', err)
        throw new Error(err)
    }
}