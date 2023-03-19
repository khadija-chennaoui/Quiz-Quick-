const route = require('express').Router()
const User = require('../controller/Auth_controller')
const { TryCatch } = require('../Outil/TryCatch')
route.post('/register', TryCatch(User.register))
route.post('/login', TryCatch(User.login))
module.exports = route