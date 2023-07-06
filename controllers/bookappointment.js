const BookAppointment = require('../models/BookAppointment');
const mongoose = require('mongoose');

exports.bookappointment_get = async (req, res) => {
    try {
        res.render('bookappointment/add')
    } catch (error) {
        console.log(error.message)
    }
}

exports.bookappointment_post = (req, res) => {
    console.log(req.body)


    const bookappointment = new BookAppointment(req.body)
    bookappointment.save()
        .then(() => {
            console.log('Your appointment has been booked')
            res.status(201).json(bookappointment)
        })
        .catch((err) => {
            console.log('an error occurred', err.message)
        })
}

exports.bookappointment_index_get = async (req, res) => {
    try{
        const bookappointments = await BookAppointment.find().populate('specialist')
        console.log(bookappointments)
        res.status(200).json(bookappointments)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: 'Something Went Wrong!'})
    }

}

exports.bookappointment_delete = async (req, res) => {
    console.log(req.query.id)
    try {
        await BookAppointment.findByIdAndDelete(req.query.id)

        res.status(204).json({message: 'bookappointment deleted!'})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

exports.bookappointment_detail_get = async (req, res) => {
    try {
        const bookappointment = await BookAppointment.findById(req.query.id)
        res.json(bookappointment)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}

exports.bookappointment_edit_get = async (req, res) => {
    try {
        const bookappointment = await BookAppointment.findById(req.query.id)
        res.render('bookappointment/edit', {bookappointment})
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}

exports.bookappointment_edit_post = async (req, res) => {
    try {
        console.log(req.body.id)
        await BookAppointment.findByIdAndUpdate(req.body.id, req.body)
		res.status(201).json(BookAppointment)
    } catch (error) {
        console.log(error.message)
    }
}