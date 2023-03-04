const mongoose = require('mongoose')
require('dotenv').config()
try{
    module.exports = mongoose.connect(process.env.DB)
    .then(() => console.log('Connected'))
    .catch(() => console.log('Not Connected'))
}
catch(error){
    resizeBy.send(error)
}