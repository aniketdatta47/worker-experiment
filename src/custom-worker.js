

self.onmessage = function(event) {
  console.log(event);
  console.log('Sending event ...');
  self.postMessage(event.data);
};
