var intervalID = null;
var currentStep;
// 30 fps
var rate;
var workerID = 0;

onmessage = function(e) {
  // msg: 'START', workerID: myWorkerID, rate: FPS[getRandomInt(0,2)] }
  console.log('Message received --- ' + e.data.msg);
  console.log('Rate --- ' + e.data.rate);
  console.log('workerID --- ' + e.data.workerID);

  Worker.init(e.data.rate, e.data.workerID);
}


class Worker {
  constructor() {
    this.intervalID = null;
    this.currentStep = 0;
    this.rate = 1000;
    this.workerId = 0;
    this.currentStep = 0;
  }

  set workerId(id) {
    this.workerId = id;
  }

  set rate(rate) {
    this.rate = rate;
    this.currentStep = 0;
  }

  get rate() {
    return this.rate;
  }

  get workerId() {
    return this.workerId;
  }

  _initialiseWorker() {
    if (this.intervalID !== null) {
      console.error("cannot init a worker that has been INITED!!!");
      return;
    }

    this.intervalID = setInterval(function() {
        this.currentStep++;

        postMessage({ 'step': this.currentStep, 'rate': this.rate, 'workerID': this.workerId });
    }, this.rate);
  }

  init(rate, id) {
    debugger;
    this.workerId = id;
    this.rate = rate;
    this._initialiseWorker();
  }
}
