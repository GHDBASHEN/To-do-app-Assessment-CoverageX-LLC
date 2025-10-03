const taskService = require('../services/task.service');

const getTasksController = async (req, res) => {
  try {
    const tasks = await taskService.getTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks' });
  }
};

const createTasksController = async (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }
  try {
    const newTask = await taskService.createTask(title, description);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Error creating task' });
  }
};

const completeTaskController = async (req, res) => {
  try {
    const { id } = req.params;
    const success = await taskService.completeTask(parseInt(id, 10));
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error completing task' });
  }
};

module.exports = {
  getTasksController,
  createTasksController,
  completeTaskController,
};