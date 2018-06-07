// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');     //Destructuring

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//deleteMany
// client.db('TodoApp').collection('Todos').deleteMany({text: 'Eat Lunch'}).then((results) => {
//   console.log(results);
// });

//deleteOne
// client.db('TodoApp').collection('Todos').deleteOne({text: 'Eat Lunch'}).then((results) => {
//   console.log(results);
// });

//findOneAndDelete
// client.db('TodoApp').collection('Todos').findOneAndDelete({completed: false}).then((results) => {
//   console.log(results);
// });

// client.db('TodoApp').collection('Users').deleteMany({name: 'Yashraj Rai'}).then((results) => {
//   console.log(results);
// });

client.db('TodoApp').collection('Users').findOneAndDelete({_id: new ObjectID('5b19476dcca3bd1644aaeb7f')}).then((results) => {
  console.log(results);
});

  client.close();
});
