
var start  = document.querySelector('#start');
var stop   = document.querySelector('#stop');
var result = document.querySelector('.result');

var workers = [];

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

function handleWorkerMessage(e) {
  document.getElementById('result').innerText += "\n Currently running -> " + e.data.step;
}

start.onclick = function() {
  if (!window.workers) {
    console.error('No workers :(');
    return;
  }

  // spawn a worker
  var workers  = window.workers;
  var myWorker = new Worker("../workers/custom-worker.js");

  myWorker.onmessage = function(e) {
    handleWorkerMessage(e);
  };

  window.workers.push(myWorker);
  myWorker.postMessage({ msg: 'START' });
};

stop.onclick = function() {
  if (!window.workers) {
    console.error('No workers :(');
    return;
  }

  var workers = window.workers;

  for (var i=0; i < workers.length; i++) {
    workers[i].terminate();
  }
};
