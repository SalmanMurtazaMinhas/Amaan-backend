const express = require('express');
const router = express.Router();
const moodController = require('../controllers/mood');
const Mood = require('../models/Mood');
const isLoggedIn = require('../lib/isLoggedIn')


// router.get('/mood', moodController.mood_create_get)

router.post('/mood/add',isLoggedIn, moodController.mood_create_post)
router.get('/mood/index', moodController.mood_index_get)


module.exports = router;
