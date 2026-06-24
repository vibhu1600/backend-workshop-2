const express = require('express');
const router = express.Router();
const { createRole, getAllRoles } = require('../controllers/role');

router.post('/create', createRole);
router.get('/all', getAllRoles);

module.exports = router;