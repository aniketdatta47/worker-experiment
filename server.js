const port = 3000;
const spdy = require('spdy');
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const options = {
  key: fs.readFileSync(__dirname + '/proxy/server.key'),
  cert: fs.readFileSync(__dirname + '/proxy/server.crt')
};

spdy
  .createServer(options, app)
  .listen(port, (error) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else {
      console.log('Listening on port: ' + port + '.')
    }
  });
