const { pool } = require('../utils/db');

const getTasks = async () => {
  const [rows] = await pool.query(
    'SELECT id, title, description FROM task WHERE is_completed = FALSE ORDER BY created_at DESC LIMIT 5'
  );
  return rows;
};

const createTask = async (title, description) => {
  const [result] = await pool.execute(
    'INSERT INTO task (title, description) VALUES (?, ?)',
    [title, description]
  );
  return { id: result.insertId, title, description };
};

const completeTask = async (id) => {
  const [result] = await pool.execute(
    'UPDATE task SET is_completed = TRUE WHERE id = ?',
    [id]
  );
  return result.affectedRows > 0;
};

module.exports = { getTasks, createTask, completeTask };