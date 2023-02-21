const mongoose = require('mongoose')
const connectDB = mongoose
    .connect('mongodb://localhost:27017/TASK_MANAGER', {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    })
module.exports = connectDB