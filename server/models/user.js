const mongoose =  require('mongoose')
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "role"
        }
    ]
})
module.exports = mongoose.model('User',UserSchema)