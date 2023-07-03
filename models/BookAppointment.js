const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BookAppointmentSchema = new Schema({

	specialist: {
		type: String,
		required: true,
	},

	time: {
		type: String,
		// required: true,
	},

	date: {
		type: Date,
		// required: true,
		default: Date.now(),
	}

}, {
	timestamps: true
});

const BookAppointment = mongoose.model('Bookappointment', BookAppointmentSchema);

module.exports = BookAppointment;
