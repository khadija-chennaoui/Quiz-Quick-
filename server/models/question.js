const mongoose = require('mongoose')
const questions = new mongoose.Schema({
    questions: { type: String, required: true },
    sector: { type: String },
    quiz: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }],
    // creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
})
module.exports = mongoose.model('Questions', quizSchema);