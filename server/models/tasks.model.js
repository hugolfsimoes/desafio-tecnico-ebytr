const connection = require('./connection.js');

const getAllTasks = async () => {
  const db = await connection();
  const allTasks = db.collection('tasks').find().toArray();
  return allTasks;
};

const createTask = async ({ title, message, creator, tags, status }) => {
  const db = await connection();
  const newTask = await db.collection('tasks').insertOne({ title, message, creator, tags, status });
  console.log(newTask);
  return { task: { _id: newTask.insertedId, title, message, creator, tags, status } };
};

module.exports = { getAllTasks, createTask };