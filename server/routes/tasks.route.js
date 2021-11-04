const express = require('express');
const TasksController = require('../controllers/tasks.controller.js');
const router = express.Router();

router.get('/', TasksController.getAllTasks);
router.post('/', TasksController.createTask);
router.put('/:id', TasksController.updateTask);

module.exports = router;