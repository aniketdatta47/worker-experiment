const port = 3000;
const spdy = require('spdy');
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

var mainjs = fs.readFileSync(__dirname + '/src/main.js');
var workerjs = fs.readFileSync(__dirname + '/workers/custom-worker.js');
var indexfile = fs.readFileSync(__dirname + '/src/index.html');
var swjs = fs.readFileSync(__dirname + '/src/sw.js');


const options = {
  key: fs.readFileSync(__dirname + '/proxy/server.key'),
  cert: fs.readFileSync(__dirname + '/proxy/server.crt')
};

spdy
  .createServer(options, function(req, res){
    var headers = {
      'content-type': 'application/javascript'
    };

    res.push('/main.js', headers, function(err, stream) {
      if (err) {
        console.log('Main errror streammmm');
        return;
      }
      stream.end(mainjs);
    });

    res.push('/sw.js', headers, function(err, stream) {
      if (err) {
        console.log('Sw errror streammmm');
        return;
      }
      stream.end(swjs);
    });

    switch(req.url) {
      case '/':
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(indexfile);
        break;
      case '/custom-worker.js':
        res.writeHead(200, headers);
        res.end(workerjs);
        break;
      default:
        res.writeHead(404);
    }
  })
  .listen(port, (error) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else {
      console.log('Listening on port: ' + port + '.')
    }
  });
