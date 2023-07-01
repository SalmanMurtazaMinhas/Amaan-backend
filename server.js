const express = require('express')
const mongoose = require('mongoose')

const journalRoute = require('./routes/journal')

const app = express()
const PORT = 4000

app.use(express.json())

app.use('/', journalRoute)

app.listen(PORT, () => {
    console.log(`The SF app is listening on ${PORT}`)
})

mongoose.connect('mongodb+srv://deadmelissajames:AZ3K6OEWsqD3hJ1g@sei4cluster.uwzeppu.mongodb.net/SF',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
).then(() => {
console.log('Mongoose Is Connected to MongoDB')
}).catch((err) => {
console.log('An error occurred', err)
})