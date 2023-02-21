const mongoose = require("mongoose")
const TaskDB = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must hame name'],
        trim: true,
        maxlenght: [20, 'must a lenght = 20']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Task", TaskDB)