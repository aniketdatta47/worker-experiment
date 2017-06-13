console.log('Worker land');

function postData(data) {
  self.postMessage(data);
}

self.addEventListener('message', function(event) {
  console.log(event);

});
