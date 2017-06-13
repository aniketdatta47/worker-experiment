// import Foo from '../src/foo.js';
import _ from 'lodash';
import Foo from '../src/foo.js';


// console.info(Foo.getText());
function component () {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

function componentZ () {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = Foo.getText();

  return element;
}

document.body.appendChild(component());
document.body.appendChild(componentZ());
