const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const moodSchema = mongoose.Schema({
    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    mood: {
        type: String,
    },
    date: {
		type: Date,
		// required: true,
		default: Date.now(),
	}
}, {
	timestamps: true
})


// Make schema to model
const Mood = mongoose.model("Mood", moodSchema);

module.exports = Mood;
