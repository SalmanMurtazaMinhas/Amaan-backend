const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const moodSchema = mongoose.Schema({

    mood: {
        type: String,
    },
    date: {
		type: String,
		// required: true,
	},
    user :{
		type: mongoose.Schema.Types.ObjectId,  
		ref: 'User'
		}
}, {
	timestamps: true
})


// Make schema to model
const Mood = mongoose.model("Mood", moodSchema);

module.exports = Mood;
