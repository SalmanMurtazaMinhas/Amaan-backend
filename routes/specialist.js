const express = require('express');
const router = express.Router();

const specialistController = require('../controllers/specialist');

router.get('/', specialistController.specialist_index_get)

router.get('/specialist/add', specialistController.specialist_get)
router.post('/specialist/add', specialistController.specialist_post)
router.get('/specialist/index', specialistController.specialist_index_get)
router.post('/specialist/delete', specialistController.specialist_delete)

module.exports = router;
