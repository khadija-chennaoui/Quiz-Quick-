const route = require('express').Router()
const Roles = require('../controller/RoleController')
const { TryCatch } = require('../Outil/TryCatch')

route.post('/add', TryCatch(Roles.AddRole))
module.exports = route