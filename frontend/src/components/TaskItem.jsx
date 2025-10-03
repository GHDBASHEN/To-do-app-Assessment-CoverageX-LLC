import React from 'react';

const TaskItem = ({ task, onComplete }) => {
  return (
    <div className="task-item">
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <button onClick={() => onComplete(task.id)}>Done</button>
    </div>
  );
};

export default TaskItem;