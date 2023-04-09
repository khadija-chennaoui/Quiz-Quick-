const route = require('express').Router()
const User = require('../controller/Auth_controller')
const { TryCatch } = require('../Outil/TryCatch')
route.post('/register', TryCatch(User.register))
route.post('/login', TryCatch(User.login))
route.get('/all',TryCatch(User.AllUser))
route.delete('/delet/:id', TryCatch(User.Delete))
module.exports = route