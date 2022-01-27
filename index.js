const express = require('express');
const app = express();
const data = require('./data');

app.get('/', (req, res) => {
  res.json({name: 'Hello World!'});
})

app.get('/users', (req, res) => {
  res.json({ data });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
