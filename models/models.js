const mongoose = require('mongoose')

const addTodoTemplate = new mongoose.Schema({
    todoName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('todos', addTodoTemplate)