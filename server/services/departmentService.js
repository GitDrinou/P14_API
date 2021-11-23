const Department = require('../database/models/departmentModel')

// Layer application : Department

// Create Department
module.exports.createDepartment = async serviceData => {
    try {
        const department = await Department.findOne({ name: serviceData.name })
        if (department) {
            throw new Error('Department already exists')
        }
    
        const newDepartment = new Department ({
            name: serviceData.name
        })

        let result = await newDepartment.save()

        return result

    } catch (err) {
        console.error('Error in departmentService file', err)
        throw new Error(err)
    }
}


// Get Department
module.exports.getDepartment = async serviceData => {
    try {
        const department = await Department.find()
        if (!department) {
            throw new Error('Department not found')
        }

        return department

    } catch(err) {
        console.error('Error in departmentService file', err)
        throw new Error(err)
    }
}