const mongoose = require('mongoose')
const RoleSchema = mongoose.Schema({
    name: {
        type: String
    }
})
module.exports = mongoose.model('role',RoleSchema)