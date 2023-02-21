const express = require("express")
const app = express()
const tasks = require('./routes/tasks')
const conncetDB = require('./db/controller')

// middleware
app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/task', tasks)

const run = async() => {
    try {
        const conncetedDb = await conncetDB
        console.log("connected")

    } catch (err) {
        console.log(err)

    }

}
run()


const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port = ${port}`)
})