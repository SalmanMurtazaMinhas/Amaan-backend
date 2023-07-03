const express = require('express');
const router = express.Router();

const bookappointmentController = require('../controllers/bookappointment');

router.get('/', bookappointmentController.bookappointment_index_get)

router.get('/bookappointment/add', bookappointmentController.bookappointment_get)
router.post('/bookappointment/add', bookappointmentController.bookappointment_post)
router.get('/bookappointment/index', bookappointmentController.bookappointment_index_get)
router.post('/bookappointment/delete', bookappointmentController.bookappointment_delete)
router.get('/bookappointment/detail', bookappointmentController.bookappointment_detail_get)
router.get('/bookappointment/edit', bookappointmentController.bookappointment_edit_get)
router.post('/bookappointment/edit', bookappointmentController.bookappointment_edit_post)


module.exports = router;
