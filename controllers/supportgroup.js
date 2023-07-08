const mongoose = require('mongoose');
const SupportGroup = require('../models/SupportGroup');

exports.group_create_get = async (req, res) => {
    try {
        res.render('group/add');
    } catch (error) {
        console.log(error.message);
    }
};

exports.group_create_post = (req, res) => {
    
    console.log(req.body)
    const supportGroup = new SupportGroup(req.body)
    supportGroup.save()
    .then(() => {
        console.log('A new support group has been posted!')
        res.status(201).json(supportGroup)
    })
    .catch((error) => {
        console.log('Oops something went wrong with support group', error.message)
    })
};

exports.group_index_get = async (req, res) => {
    try {
        const supportGroups = await SupportGroup.find()
        console.log(supportGroups)
        res.status(200).json(supportGroups)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: "Something went wrong bestie"})
    }
};