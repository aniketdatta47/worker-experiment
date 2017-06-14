onmessage = function(e) {
  console.log('Message received from main --- ' + e.data.msg);
  startSteps();
}

var intervalID = null;
var currentStep;

function startSteps() {
  currentStep = 0;
  intervalID = setInterval(function() {
      currentStep++;
      postMessage({step: currentStep});
  }, 42);
}
