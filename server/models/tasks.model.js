const connection = require('./connection.js');

const getAllTasks = async () => {
  const db = await connection();
  const allTasks = db.collection('tasks').find().toArray();
  return allTasks;
};

/* const taskSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  status: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const TaskMessage = mongoose.model('TaskMessage', taskSchema); */

module.exports = { getAllTasks };