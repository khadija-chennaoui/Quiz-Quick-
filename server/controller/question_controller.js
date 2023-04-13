const Question = require('../models/question');
const quiz = require('../models/quiz');

const AddQuestion = async (req, res) => {
    const { body } = req
    if (!body.question || !body.reponse) throw Error("input non valide!");
    const existeQuiz = await quiz.findById(body.quiz)
    const creat_question = await Question.create({
        quiz_id: existeQuiz,
        ...body
    })
    if (!creat_question) throw Error("l'ajout de question est echouee ")
    res.status(200).json({
        creat_question
    })
}

const AllQuestion = async (req, res) => {
    const allQuestion = await Question.find()
    if (!allQuestion) throw Error('No question ici !')
    res.status(200).json(
        allQuestion
    )
}

module.exports = {
    AddQuestion,
    AllQuestion
}