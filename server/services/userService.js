const User = require('../database/models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Layer application : User

// Create User
module.exports.createUser = async serviceData => {
    try {
        const user = await User.findOne({ email: serviceData.email })
        if (user) {
            throw new Error('Email already exists')
        }
    
        //const hashPassword = await bcrypt.hash(serviceData.password, 12)

        const newUser = new User ({
            email: serviceData.email,
            password: serviceData.password,
            firstName: serviceData.firstName,
            lastName: serviceData.lastName
        })

        let result = await newUser.save()

        return result

    } catch (err) {
        console.error('Error in userService file', err)
        throw new Error(err)
    }
}

// Login User
module.exports.loginUser = async serviceData => {

    try{
        const user = await User.findOne({ email: serviceData.email })

        if (!user) {
            throw new Error('User not found')
        }

       
        
    // const isValid = await bcrypt.compare(serviceData.password, user.password)

    // if (!isValid) {
    //   throw new Error('Password is invalid')
    // }

    const token = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY || 'default-secret-key',
      { expiresIn: '1d' }
    )

    return { token }

    } catch (err) {
        console.error('Error in userService file', err)
        throw new Error(err)
    }
}

// Get User
module.exports.getUser = async serviceData => {
    try {
        const jwtToken = serviceData.headers.authorization.split('Bearer')[1].trim()
        const decodedJwtToken = jwt.decode(jwtToken)
        const user = await User.findOne({ _id: decodedJwtToken.id })
        if (!user) {
            throw new Error('User not found')
        }

        return user.toObject()

    } catch(err) {
        console.error('Error in userService file', err)
        throw new Error(err)
    }
}

// Update User
module.exports.updateUser = async serviceData => {
    try {
        const jwtToken = serviceData.headers.authorization.split('Bearer')[1].trim()
        const decodedJwtToken = jwt.decode(jwtToken)
        //const hashPassword = await bcrypt.hash(serviceData.password, 12)
        const user = await User.findOneAndUpdate(
            { _id: decodedJwtToken.id },
            {
                email: serviceData.email,
                firstName: serviceData.firstName,
                lastName: serviceData.lastName,
                password: serviceData.password
            },
            { new: true }
        )

        if (!user) {
            throw new Error('USer not found')
        }

        return user.toObject()

    } catch (err) {
        console.error('Error in userService file', err)
        throw new Error(err)
    }
}