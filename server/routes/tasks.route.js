const express = require('express');
const TasksController = require('../controllers/tasks.controller.js');
const router = express.Router();

router.get('/', TasksController.getAllTasks);
router.post('/', TasksController.createTask);

module.exports = router;