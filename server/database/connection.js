const mongoose = require('mongoose')
const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost/hrNetDB'

module.exports = async () => {
    try {
        await mongoose.connect(databaseUrl, { useNewUrlParser: true })
        console.log('Database successfully connected')
    } catch (err) {
        console.error(`Database Connectivity Error : ${err}`)
        throw new Error(err)
    }
}