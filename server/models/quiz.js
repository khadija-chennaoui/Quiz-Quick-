const mongoose = require('mongoose')
const quizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    // creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
})
module.exports = mongoose.model('Quiz', quizSchema);