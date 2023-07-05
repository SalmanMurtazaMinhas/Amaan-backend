const Specialist = require('../models/Specialist');
const mongoose = require('mongoose');


exports.specialist_get = async (req, res) => {
    try {
        res.render('specialist/add')
    } catch (error) {
        console.log(error.message)
    }

    
}

exports.specialist_post = (req, res) => {
    console.log(req.body)


    const specialist = new Specialist(req.body)
    specialist.save()
        .then(() => {
            console.log('Specialist has been Saveded')
            res.status(201).json(specialist)
        })
        .catch((err) => {
            console.log('an error occurred', err.message)
        })
}

exports.specialist_index_get = async (req, res) => {
    try{
        const specialists = await Specialist.find()
        console.log(specialists)
        res.status(200).json(specialists)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: 'Something Went Wrong!'})
    }


}

exports.specialist_delete = async (req, res) => {
    console.log(req.query.id)
    try {
        await Specialist.findByIdAndDelete(req.query.id)

        res.status(204).json({message: 'specialist deleted!'})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

exports.specialist_detail_get = async (req, res) => {
    try {
        const specialist = await Specialist.findById(req.query.id)
        res.json(specialist)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}

exports.specialist_edit_get = async (req, res) => {
    try {
        const specialist = await Specialist.findById(req.query.id)
        res.render('specialist/edit', {specialist})
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}

exports.specialist_edit_post = async (req, res) => {
    try {
        console.log(req.body.id)
        await Specialist.findByIdAndUpdate(req.body.id, req.body)
		res.status(201).json(Specialist)
    } catch (error) {
        console.log(error.message)
    }
}
