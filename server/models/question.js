const mongoose = require('mongoose')
const questionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    reponse: { type: Boolean },
    quiz_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }],
})
module.exports = mongoose.model('Questions', questionSchema);