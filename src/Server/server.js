const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/roll', (req, res) => {
  const sides = req.query.dice;
  const result = Math.floor(Math.random() * sides) + 1;
  res.json({ result });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
