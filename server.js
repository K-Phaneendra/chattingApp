const express = require('express');

// express app setup
const app = express();
const server = app.listen(4000, () => {
  console.log('server is listerning to port 4000');
});
