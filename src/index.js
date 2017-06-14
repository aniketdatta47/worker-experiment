import _ from 'lodash';

var Worker = require("worker-loader?inline!../src/custom-worker.js");
var workers = [];


function component () {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack', 'All good to go now...'], ' ');

  return element;
}

function inputComponent() {
  var el = document.createElement('input');
  el.id = 'one';
  el.innerText = 'text';

  return el;
}

function button(txt) {
  var el = document.createElement('button');
  el.id = txt.toLowerCase();
  el.innerText = txt;

  return el;
}

function mountWorker () {
  var input = document.querySelector('#one');
  var workerRes = document.querySelector('#worker');
  var worker = new Worker();

  // add to worker stack
  workers.push(worker);

  input.onchange = function() {
    worker.postMessage({'val': input.value }); // Sending message as an array to the worker
	  console.log('Message posted to worker');
  }

  worker.onmessage = function(event) {
    debugger;
    console.log(event);
    console.log('on-message....');
  };

  worker.addEventListener("message", function(event) {
    debugger;
    workerRes.innerText = event.data;
    console.info('Message received from worker');
  });

}


function stopworkers() {
  if (!workers.length) {
    console.log('No workers :(');
    return;
  }

  for (var i=0; i<workers.length; i++) {
    workers[i].terminate();
    console.log('Worker - ' + i + ' terminated');
  }
}

document.body.appendChild(component());
document.body.appendChild(inputComponent());
var g = document.body.appendChild(button('GO'));
g.addEventListener('click', (e) => {
  mountWorker();
});

var stop = document.body.appendChild(button('STOP'));
stop.addEventListener('click', (e) => {
  stopworkers();
});
