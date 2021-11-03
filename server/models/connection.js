const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb+srv://hugolfsimoes:hugolfsimoes123@cluster0.d305m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

let db = null;

const connection = () => {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
      .then((conn) => {
        db = conn.db('TaskManager');
        return db;
      });
};

module.exports = connection;