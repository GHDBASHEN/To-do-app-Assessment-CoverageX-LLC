const { Router } = require('express');
const {
  getTasksController,
  createTasksController,
  completeTaskController,
} = require('../controllers/task.controller');

const router = Router();

router.get('/tasks', getTasksController);
router.post('/tasks', createTasksController);
router.put('/tasks/:id/complete', completeTaskController);

module.exports = router;