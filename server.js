const express = require('express')
const cors = require('cors')
const app = express()

var corsOptions = {
    origin: 'http://localhost:1984'
}


//middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routers
const router = require('./routes/staffRouters.js')
app.use('api/staff', router)


app.get('/', (req, res) => {
    res.json({ message: 'Employees DB and API'})
})

//port
const PORT = 1984 //process.env.PORT 

//Run server
app.listen(PORT, () => {
    console.log(`Server is runnning on port ${PORT}`)
})