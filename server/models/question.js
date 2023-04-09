const mongoose = require('mongoose')
const questions = new mongoose.Schema({
    questions: { type: String, required: true },
    Reponse: { type: Boolean },
    quiz: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }],
    // creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
})
module.exports = mongoose.model('Questions', quizSchema);