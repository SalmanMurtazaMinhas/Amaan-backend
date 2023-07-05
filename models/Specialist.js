const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SpecialistSchema = new Schema({

	Name: {
		type: String,
		required: true,
	},

	Role: {
		type: String,
		// required: true,
	},

	YearsofExperience: {
		type: Number,
		// required: true,
		default: Date.now(),
	}

}, {
	timestamps: true
});

const Specialist = mongoose.model('Specialist', SpecialistSchema);

module.exports = Specialist;
