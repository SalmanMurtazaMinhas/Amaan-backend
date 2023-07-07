const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SupportGroupSchema = new Schema({
    
    title: {
        type: String,
        required: true
    },
    specialist: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true,
        minlength: [20, 'Description must be at least 100 characters.'],
        maxlength: [400, 'Description cannot exceed 400 characters.']
    }, 
    date: {
        type: Date,
        required: true
    }, 
    time: {
        type: String,
        required: true
    },
    noOfSeats: {
        type: Number,
        required: true,
        min: 5,
        max: 15
    },
    duration: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }, 
    cost: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const SupportGroup = mongoose.model('SupportGroup', SupportGroupSchema);

module.exports = SupportGroup;