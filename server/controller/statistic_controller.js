const Etudiants = require("../models/user");
const Quiz = require("../models/quiz");
const Question = require("../models/question");
const etud = '64178667a135c9e70380a2ab';

const TotalEtudiant = async (req, res) => {
    try {
        Etudiants.countDocuments({ role_id: etud })
            .then(docCount => {
                res.json(docCount);
            })
            .catch(err => {
                res.status(502).json(err);
            });
    } catch (error) {
        throw Error(error);
    }
};
const TotalQuiz = async (req, res) => {
    try {
        Quiz.countDocuments({})
            .then(docCount => {
                res.json(docCount);
            })
            .catch(err => {
                res.status(502).json(err);
            });
    } catch (error) {
        throw Error(error);
    }
};
const TotalQuestion = async (req, res) => {
    try {
        Question.countDocuments({})
            .then(docCount => {
                res.json(docCount);
            })
            .catch(err => {
                res.status(502).json(err);
            });
    } catch (error) {
        throw Error(error);
    }
};





module.exports = {
    TotalEtudiant,
    TotalQuiz,
    TotalQuestion
};
