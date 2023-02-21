const express = require('express')
const router = express.Router()
const {
    AllItemTask,
    getTask,
    creatTask,
    updateTask,
    deleteTask
} = require("../controller/tasks")

router.route('/').get(AllItemTask).post(creatTask)
router.route('/:ID').get(getTask).delete(deleteTask).patch(updateTask)
module.exports = router