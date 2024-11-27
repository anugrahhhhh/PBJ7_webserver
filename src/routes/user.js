const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/userController');

// Rute untuk menambahkan pengguna
router.post('/', createUser);

module.exports = router;
