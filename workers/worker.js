
export default class Worker {
  constructor(intervalId, rate) {
    this.id = intervalId;
    this.rate = rate;
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
    if (this.id !== null) {
      console.error("cannot init a worker that has been INITED!!!");
      return;
    }

    //...stuff?
  }

  init(rate, id) {
    debugger;
    this.workerId = id;
    this.rate = rate;
    this._initialiseWorker();
  }
}
