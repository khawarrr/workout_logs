require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

//use mongoose to connect to the database
mongoose.connect(process.env.MONGO_URI)
    // if the MONGO_URI is incorrect it'll give the error
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`app is connected to db & listening on Ohio port ${process.env.PORT}!`)
        })
    })
    .catch((error) => {
        console.log(error)
    })


