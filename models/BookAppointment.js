const mongoose = require('mongoose')
const Schema = mongoose.Schema;



const bookappointmentSchema = new Schema({

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

const BookAppointment = mongoose.model('BookAppointment', bookappointmentSchema);

module.exports = BookAppointment;
