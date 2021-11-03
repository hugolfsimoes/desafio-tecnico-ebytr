const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const tasksRoutes = require('./routes/tasks.route.js');

const app = express();

app.use('/tasks', tasksRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/* const CONNECTION_URL = 'mongodb+srv://hugolfsimoes:hugolfsimoes123@cluster0.d305m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));

/* mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`)))
  .catch((error) => console.log(error.message)); */
