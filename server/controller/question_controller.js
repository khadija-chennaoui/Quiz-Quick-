const Question = require('../models/question')
const AddQuestion = async (req, res) => {
    const { body } = req
    if (!body.title) throw Error("input non valide!");
    const creat_quiz = await Quiz.create({ ...body })
    if (!creat_quiz) throw Error("l'ajout de quiz est echouee ")
    res.status(200).json({
        creat_quiz
    })
}


module.exports = {
    AddQuestion,
}