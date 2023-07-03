const express = require('express');
const router = express.Router();
const moodController = require('../controllers/mood');
const Mood = require('../models/Mood');


// router.get('/mood', moodController.mood_create_get)

router.post('/mood/add', moodController.mood_create_post)

module.exports = router;
