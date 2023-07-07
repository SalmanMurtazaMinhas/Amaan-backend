const express = require('express');
const router = express.Router();
const supportGroupCtrl = require('../controllers/supportgroup');

router.get('/supportgroup/add', supportGroupCtrl.group_create_get);
router.post('/supportgroup/add', supportGroupCtrl.group_create_post);
router.get('/supportgroup/index', supportGroupCtrl.group_index_get);

module.exports = router;