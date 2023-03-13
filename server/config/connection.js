const mongoose = require('mongoose');

//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/books', {
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/books', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});




// const { MongoClient } = require('mongodb');
// const uri = 'mongodb://localhost:27017/books';

// async function createDatabase() {
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();

//     const database = client.db('mydb');

//     console.log(`Database ${database.databaseName} created.`);
//   } finally {
//     await client.close();
//   }
// }

// createDatabase().catch(console.error);


module.exports = mongoose.connection;
