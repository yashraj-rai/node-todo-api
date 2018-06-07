// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');     //Destructuring

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // client.db('TodoApp').collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert Todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

// client.db('TodoApp').collection('Users').insertOne({
//   name: 'Yashraj Rai',
//   age: 29,
//   location: 'Kharghar, Navi Mumbai'
// }, (err, result) => {
//   if (err) {
//     return console.log('Unable to insert Users', err);
//   }
//   console.log(result.ops[0]._id.getTimestamp());
// });

  client.close();
});
