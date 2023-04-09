const route = require('express').Router()
const Quiz = require('../controller/quiz_controller')
const { TryCatch } = require('../Outil/TryCatch')

route.post('/addQuiz', TryCatch(Quiz.AddQuiz))
route.get('/allQuiz', TryCatch(Quiz.AllQuiz))
module.exports = route