const express = require('express');
const router = express.Router();
const { createUser, login, getAllUsers, getUserById, updateUser, deleteUser, logout } = require('../controllers/user');
const auth = require('../middlewares/auth');
const { createUserValidator } = require('../validators/user');
const validateInput = require('../validators/validateInput');

router.post('/create', createUserValidator, validateInput, createUser);
router.post('/login', login);
router.get('/all', auth, getAllUsers);
router.get('/:id', auth, getUserById);
router.put('/update/:id', auth, updateUser);
router.delete('/delete/:id', auth, deleteUser);
router.post('/logout', auth, logout);

module.exports = router;