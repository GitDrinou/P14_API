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


// Update Employee
module.exports.updateEmployee = async serviceData => {
    try {
        const employee = await Employee.findOneAndUpdate(
            { id : serviceData.id},
            {
                lastName: serviceData,
                street: serviceData.street,
                city: serviceData.city,
                state: serviceData.state,
                zipCode: serviceData.zipCode,
                department: serviceData.department
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