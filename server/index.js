const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const tasksRoutes = require('./routes/tasks.route.js');
const error = require('./middlewares/error');
const TasksController = require('./controllers/tasks.controller');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/tasks', tasksRoutes);
console.log(process.env.MONGO_DB_URL);

app.use('/', TasksController.getAllTasks);
app.use(error);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));