const express = require('express');
const taskController = require('../controller/taskController')

const router = express.Router();

router.get('/tasks', taskController.getAll);

module.exports = router;

// app.get('/task', (request, response) => response.status(200).send('OI!'));