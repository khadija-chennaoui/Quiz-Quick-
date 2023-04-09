const Quiz = require('../models/quiz')
const AddQuiz = async (req, res) => {
    const { body } = req
    if (!body.title) throw Error("input non valide!");
    const creat_quiz = await Quiz.create({ ...body })
    if (!creat_quiz) throw Error("l'ajout de quiz est echouee ")
    res.status(200).json({
        creat_quiz
    })
}

const AllQuiz = async (req, res) => {
    const All = await Quiz.find()
    if (!All) throw Error('No quiz existe')
    res.status(200).json(All)
}
module.exports = {
    AddQuiz,
    AllQuiz
}  