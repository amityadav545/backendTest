// routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.post('/add', dataController.addData);
router.post('/update/:id', dataController.updateData);
router.get('/count', dataController.getCount);
router.get('/all', dataController.getAllData); 

module.exports = router;
