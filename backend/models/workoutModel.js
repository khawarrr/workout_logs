// mongoose allow us to create the models.
const mongoose = require("mongoose")

const Schema = mongoose.Schema
const workoutSchema = new Schema({
    title: {
        type: String,
        requires: true
    },
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)
