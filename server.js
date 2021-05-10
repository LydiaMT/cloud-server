'use strict';

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the site!')
})

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => console.log(`server up on http://localhost:${port}`));
  }
};
