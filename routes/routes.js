const express = require("express");
const router = express.Router()
const addTodoTemplate = require('../models/models')

router.post('/addTodo', (req, res) => {
    const addTodo = new addTodoTemplate({
        todoName:req.body.todoName,
    })

    addTodo.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})


module.exports = router