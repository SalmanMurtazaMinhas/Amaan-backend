const express = require('express');
const router = express.Router();
const journalController = require('../controllers/journal');
const Journal = require('../models/Journal');

router.get('/', journalController.journal_index_get)

router.get('/journal/add', journalController.journal_create_get)
router.post('/journal/add', journalController.journal_create_post)
router.get('/journal/index', journalController.journal_index_get)
router.post('/journal/delete', journalController.journal_delete)
router.get('/journal/detail', journalController.journal_detail_get)
router.get('/journal/edit', journalController.journal_edit_get)
router.post('/journal/edit', journalController.journal_edit_post)


module.exports = router;
