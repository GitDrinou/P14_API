const State = require('../database/models/stateModel')

// Layer application : State

// Create State
module.exports.createState = async serviceData => {
    try {
        const state = await State.findOne({ name: serviceData.name })
        if (state) {
            throw new Error('State already exists')
        }
    
        const newState = new State ({
            name: serviceData.name,
            abbreviation: serviceData.abbreviation
        })

        let result = await newState.save()

        return result

    } catch (err) {
        console.error('Error in stateService file', err)
        throw new Error(err)
    }
}


// Get State
module.exports.getState = async serviceData => {
    try {
        const state = await State.find()
        if (!state) {
            throw new Error('State not found')
        }

        return state

    } catch(err) {
        console.error('Error in stateService file', err)
        throw new Error(err)
    }
}