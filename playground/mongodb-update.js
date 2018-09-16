// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  } console.log('Connected to MongoDB');

db.collection('Todos').findOneAndUpdate({
  _id: new ObjectID('5b9e6ed61b660a247be478cd')
}, {
  $set: {
    completed: true
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
})


  // db.close();
});