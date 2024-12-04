const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a potential error
      // const error = new Error('Something went wrong!');
      // reject(error);
      resolve('Hello, world!');
    }, 5000); 
  })
  .then((result) => {
    res.send(result);
  })
  .catch((error) => {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});