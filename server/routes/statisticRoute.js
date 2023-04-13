const route = require('express').Router()
const statistic = require('../controller/statistic_controller')
route.get('/totaletudiants', statistic.TotalEtudiant)
route.get('/totalQuiz', statistic.TotalQuiz)
route.get('/totalQuestion', statistic.TotalQuestion)



module.exports = route