const Journal = require('../models/Journal');
const mongoose = require('mongoose');



exports.journal_create_get = async (req, res) => {
    try {
        res.render('journal/add')
    } catch (error) {
        console.log(error.message)
    }

    
}

exports.journal_create_post = (req, res) => {
    req.body.user = req.user.id
    console.log(req.body)
    
    const journal = new Journal(req.body)
    console.log(journal)
    journal.save()
        .then(() => {
            console.log('Your journal has been saved')
            res.status(201).json(journal)
        })
        .catch((err) => {
            console.log('an error occurred', err.message)
        })
}

exports.journal_index_get = async (req, res) => {
    try{
        const journals = await Journal.find({user:req.user._id})
        console.log(journals)
        res.status(200).json(journals)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: 'Something Went Wrong!'})
    }


}

exports.journal_delete = async (req, res) => {
    console.log(req.query.id)
    try {
        await Journal.findByIdAndDelete(req.query.id)

        res.status(204).json({message: 'Journal deleted!'})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

exports.journal_detail_get = async (req, res) => {
    try {
        const journal = await Journal.findById(req.query.id)
        res.json(journal)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}

exports.journal_edit_get = async (req, res) => {
    try {
        const journal = await Journal.findById(req.query.id)
        res.render('journal/edit', {journal})
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}

exports.journal_edit_post = async (req, res) => {
    try {
        console.log(req.body.id)
        await Journal.findByIdAndUpdate(req.body.id, req.body)
		res.status(201).json(Journal)
    } catch (error) {
        console.log(error.message)
    }
}
