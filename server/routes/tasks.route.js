const express = require('express');
const TasksController = require('../controllers/tasks.controller.js');
const router = express.Router();

router.get('/', TasksController.getAllTasks);
router.post('/', TasksController.createTask);
router.put('/:id', TasksController.updateTask);
router.delete('/:id', TasksController.deleteTask);

module.exports = router;