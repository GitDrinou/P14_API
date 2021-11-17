const mongoose = require('mongoose')

// Layer data : Employee
const employeeSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        birthDate: Date,
        startDate: Date,
        street: String,
        city: String,
        state: String,
        zipCode: Number,
        department: String
    },
    {
        timestamps: true,
        toObject:{
            transform: (doc, ret, options) => {
                ret.id = ret._id
                delete ret._id
                delete ret.__v
                return ret
            }
        }
    }
)

module.exports = mongoose.model('Employee', employeeSchema)