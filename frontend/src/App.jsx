import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './App.css';
import AddTaskForm from './components/AddTaskForm';
import TaskItem from './components/TaskItem';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleTaskCompleted = async (id) => {
    try {
      await axios.put(`${API_URL}/tasks/${id}/complete`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error('Error completing task:', error);
    }
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <h1>Add a Task</h1>
        <AddTaskForm onTaskAdded={fetchTasks} apiUrl={API_URL} />
      </div>
      <div className="tasks-container">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onComplete={handleTaskCompleted} />
        ))}
      </div>
    </div>
  );
}

export default App;