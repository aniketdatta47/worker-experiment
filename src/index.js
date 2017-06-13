// import Foo from '../src/foo.js';
import _ from 'lodash';

// console.info(Foo.getText());
function component () {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
