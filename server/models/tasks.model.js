import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
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

const TaskMessage = mongoose.model('TaskMessage', taskSchema);

export default TaskMessage;