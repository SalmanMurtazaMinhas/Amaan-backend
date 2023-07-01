const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const journalSchema = new Schema({

	title: {
		type: String,
		required: true,
	},

	body: {
		type: String,
		required: true,
	},

	date: {
		type: Date,
		// required: true,
		default: Date.now(),
	}

	// userID of the journal entry 
	// userId: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'User',
	// 	required: true,
	// },
}, {
	timestamps: true
});

const Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;
