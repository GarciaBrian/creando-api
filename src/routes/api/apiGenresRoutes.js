const express = require('express');
const router = express.Router();
const apiGenresController = require('../../controllers/api/apiGenresController');

router.get('/api/genres', apiGenresController.list);
router.get('/api/genres/detail/:id', genresController.detail);

module.exports = router;