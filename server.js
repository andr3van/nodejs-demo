'use strict';

const express = require('express');

// Constants
const PORT = 8686;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello NodeJS in Jenkins World. Also hello from Docker. Hello CI/CD!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
