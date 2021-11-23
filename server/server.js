const express = require('express')
const dotEnv = require('dotenv')
const cors = require('cors')
const dbConnection = require('./database/connection')

dotEnv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Connect to the database
dbConnection()

/**
 * Handle Cross-Origin Ressource Sharing (CROS) issues
 * CROS : mechanism which consists in adding HTTP headers in order to allow user agent to access the ressource of a server located on another origin than the current site
*/ 
app.use(cors())

// Request payload middleware from method needed body
app.use(express.json())

// Handle custom routes
app.use('/api/v1/user', require('./routes/userRoutes'))
app.use('/api/v1/employee', require('./routes/employeeRoutes'))
app.use('/api/v1/state', require('./routes/stateRoutes'))
app.use('/api/v1/department', require('./routes/departmentRoutes'))

// Message from server root
app.get('/', (req, res, next) => {
    res.send('Hello from your Express server !')
})

// Listen Server OK
app.listen(PORT, () => {
    console.log(`Server listening from http://localhost:${PORT}`)
})