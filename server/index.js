const cors = require('cors')
const express = require('express')
const errorHandler = require('./middlewares/ErrorHandler')
const roles = require('./routes/roleRoute')
const User = require('./routes/userRoute')
const Quiz = require('./routes/quizRoute')
require('./configs/db')
const app = express()
app.use(express.json())
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use('/addRole', roles)
app.use('/quiz', Quiz)
app.use('/Auth', User)
app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`server is runing at PORT ${PORT}`)
})