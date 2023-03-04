const express = require('express')
const app = express()
require("dotenv").config();
require('./configs/db')
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
const PORT = process.env.PORT 

app.listen(PORT, () => {
    console.log(`server is runing at PORT ${PORT}`)
})