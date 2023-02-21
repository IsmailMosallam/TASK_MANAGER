const Task = require('../models/task')

const AllItemTask = async(req, res) => {
    try {
        const ALLITEM = await Task.find()
        res.send({ ALLITEM })
    } catch (err) {
        res.json({ err })
    }
}

const getTask = async(req, res) => {
    try {
        const { id: task } = req.params
        const singleItem = await Task.findOne({ id: task })
        res.json({ singleItem })
        if (!task) {
            res.status(404).json(`Not Found id = ${task}`)
        }
    } catch (err) {
        res.json(err)
    }
}


const creatTask = async(req, res) => {
    try {

        const newTask = await Task.create({
            name: req.body.name,
            completed: req.body.completed
        })
        res.json(newTask)
    } catch (err) {
        res.json(ree)
    }
}


const updateTask = async(req, res) => {
    try {

        const upTask = await Task.findOneAndUpdate({ _id: req.params.ID }, req.body, {
            new: true,
            runValidators: true
        })
        res.json({ upTask })
        if (!upTask) {
            res.status(404).json({ mas: 'Not update' })
        }
    } catch (err) {
        res.json(err)
    }
}
const deleteTask = async(req, res) => {
    try {
        const deleTask = await Task.remove({ _id: req.params.ID })
        res.json({ deleTask })
    } catch (err) {
        res.json(err)

    }
}

module.exports = {
    AllItemTask,
    creatTask,
    getTask,
    updateTask,
    deleteTask
}