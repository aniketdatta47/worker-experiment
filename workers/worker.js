export default class Worker {
  constructor(intervalId, rate) {
    this.id = intervalId;
    this.rate = rate;
  }

  _initialiseWorker() {
    if (this.id !== null) {
      console.error("cannot init a worker that has been INITED!!!");
      return;
    }

    // init
    this.currentStep = 0;
    this.messages = [];

    this.id = setInterval(function() {
      this.currentStep++;

      // process the queue
      // send the messages

      postMessage({
        step: this.currentStep,
        rate: this.rate,
        workerID: this.id
      });
    }, this.rate);
    //...stuff?
  }

  addToQueue(event, data) {
    this.messages.push({
      event,
      data
    });
  }
}
