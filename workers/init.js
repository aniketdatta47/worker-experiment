import Worker from './worker';

var intervalID = null;
var currentStep;
// 30 fps
var rate;
var workerID = 0;

    this.id = setInterval(function() {
        this.currentStep++;

        postMessage({ 'step': this.currentStep, 'rate': this.rate, 'workerID': this.workerId });
    }, this.rate);
onmessage = function(e) {
  // msg: 'START', workerID: myWorkerID, rate: FPS[getRandomInt(0,2)] }
  console.log('Message received --- ' + e.data.msg);
  console.log('Rate --- ' + e.data.rate);
  console.log('workerID --- ' + e.data.workerID);

  if (e.msg === "START") {
    new Worker(e.data.workerID, e.data.rate);
  }
}
