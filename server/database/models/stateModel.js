const mongoose = require('mongoose')

const stateSchema = new mongoose.Schema(
  {
    name: String,
    abbreviation: String
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, options) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
        return ret
      }
    }
  }
)

module.exports = mongoose.model('State', stateSchema)