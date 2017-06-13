import _ from 'lodash';

var Worker = require("worker-loader!./cworker.js");

function component () {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack', 'All good to go now...'], ' ');

  return element;
}

function inputComponent() {
  var el = document.createElement('input');
  el.id = 'one';
  el.type = 'text';

  return el;
}

function mountWorker () {
  var input = document.querySelector('#one');
  var workerRes = document.querySelector('#worker');
  var worker = new Worker();

  input.onchange = function() {
    worker.postMessage({'val': input.value }); // Sending message as an array to the worker
	  console.log('Message posted to worker');
  }

  worker.onmessage = function(event) {
    console.log(event.data);
    console.log('on-message....');
  };

  worker.addEventListener("message", function(event) {
    debugger;
    workerRes.textContent = event.data;
    console.info('Message received from worker');
  });

}

document.body.appendChild(component());
document.body.appendChild(inputComponent());
mountWorker();
