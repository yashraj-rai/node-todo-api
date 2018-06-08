// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');     //Destructuring

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// client.db('TodoApp').collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5b1963b4cca3bd1644aaed64')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

client.db('TodoApp').collection('Users').findOneAndUpdate({
  _id: new ObjectID('5b1803d5532433263a4bc14c')
}, {
  $set: {
    name: 'Yashraj Rai'
  },
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});


  client.close();
});
