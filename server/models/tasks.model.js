const connection = require('./connection.js');
const { ObjectId } = require('mongodb');

const getAllTasks = async () => {
  const db = await connection();
  const allTasks = db.collection('tasks').find().toArray();
  return allTasks;
};

const createTask = async ({ title, message, author, priority, status }) => {
  const db = await connection();
  const newTask = await db.collection('tasks').insertOne({ title, message, author, priority, status, createdAt: Date.now() });
  return { task: { _id: newTask.insertedId, title, message, author, priority, status } };
};

const findTaskById = async (_id) => {
  if (!ObjectId.isValid(_id)) return null;
  const db = await connection();
  const task = await db.collection('tasks').findOne({ _id: ObjectId(_id) });
  return task;
};


const updateTask = async (_id, update) => {
  const db = await connection();
  const updatedTask = await db.collection('tasks').updateOne({ _id: ObjectId(_id) }, { $set: update });
  console.log(updatedTask);
  return updatedTask.matchedCount === 1;
};

module.exports = { getAllTasks, createTask, findTaskById, updateTask };