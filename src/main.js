
var start  = document.querySelector('#start');
var stop   = document.querySelector('#stop');
var result = document.querySelector('.result');

var workers = [];

const FPS = [(1/30) * 1000, (1/60) * 1000, (1/45) * 1000];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
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

function handleWorkerMessage(e) {
  var elToUpdate = document.getElementById(e.data.workerID);

  if (!elToUpdate) {
    console.log('Damn.');
    return;
  }

  elToUpdate.innerText = "\n" + `Running ${e.data.workerID}: ${e.data.step} at rate ${e.data.rate}`;
}

start.onclick = function() {
  if (!window.workers) {
    console.error('No workers :(');
    return;
  }

  // spawn a worker
  var workers    = window.workers;
  var myWorker   = new Worker("../workers/custom-worker.js");
  var myWorkerID = Date.now();

  myWorker.onmessage = function(e) {
    handleWorkerMessage(e);
  };

  window.workers.push({
    worker: myWorker,
    workerID: myWorkerID
  });

  var div = document.createElement('div');
  div.id = myWorkerID;
  document.getElementById('result').appendChild(div);

  myWorker.postMessage({ msg: 'START', workerID: myWorkerID, rate: FPS[getRandomInt(0,3)] });
};

stop.onclick = function() {
  if (!window.workers) {
    console.error('No workers :(');
    return;
  }

  var workers = window.workers;

  for (var i=0; i < workers.length; i++) {
    workers[i].worker.terminate();
  }
};
