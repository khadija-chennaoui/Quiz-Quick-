const mongoose = require('mongoose')
const quizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    sector: { type: String },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
})
module.exports = mongoose.model('Quiz', quizSchema);