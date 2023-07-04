const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const moodSchema = mongoose.Schema({

    iconName: {
        type: String,
    },
    date: {
		type: Date,
		// required: true,
		default: Date.now()
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
