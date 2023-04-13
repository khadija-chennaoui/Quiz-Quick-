const route = require('express').Router()
const Question = require('../controller/question_controller')
const { TryCatch } = require('../Outil/TryCatch')

route.post('/addQuestion', TryCatch(Question.AddQuestion))
route.get('/allQuestion', TryCatch(Question.AllQuestion))
module.exports = route