import Worker from './worker';
import WorkerHandler from './WorkerHandler'

var intervalID = null;
var currentStep;
// 30 fps
var rate;
var workerID = 0;


self.onmessage = function(e) {
  // msg: 'START', workerID: myWorkerID, rate: FPS[getRandomInt(0,2)] }
  console.log('Message received --- ' + e.data.msg);
  console.log('Rate --- ' + e.data.rate);
  console.log('workerID --- ' + e.data.workerID);

  if (e.msg === "START") {
    new Worker(e.data.workerID, e.data.rate);
  }
}

self.onerror = function(e) {

}
