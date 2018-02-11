const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

const server = new http.Server(app);

server.listen(port, function() {
  console.log(`Listening on ${port}`);
})

