const express = require('express');
const router = express.Router();
const { homePage } = require('../controllers/homeController');

// Rute untuk halaman utama
router.get('/', homePage);

module.exports = router;
