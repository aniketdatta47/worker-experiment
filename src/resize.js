// function ObserverList(){
//   this.observerList = [];
// }
//
// ObserverList.prototype.add = function( obj ){
//   return this.observerList.push( obj );
// };
//
// ObserverList.prototype.count = function(){
//   return this.observerList.length;
// };
//
// ObserverList.prototype.get = function( index ){
//   if( index > -1 && index < this.observerList.length ){
//     return this.observerList[ index ];
//   }
// };
//
// ObserverList.prototype.indexOf = function( obj, startIndex ){
//   var i = startIndex;
//
//   while( i < this.observerList.length ){
//     if( this.observerList[i] === obj ){
//       return i;
//     }
//     i++;
//   }
//
//   return -1;
// };
//
// ObserverList.prototype.removeAt = function( index ){
//   this.observerList.splice( index, 1 );
// };
//
// function Subject(){
//   this.observers = new ObserverList();
// }
//
// Subject.prototype.addObserver = function( observer ){
//   this.observers.add( observer );
// };
//
// Subject.prototype.removeObserver = function( observer ){
//   this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
// };
//
// Subject.prototype.notify = function( context ){
//   var observerCount = this.observers.count();
//   for(var i=0; i < observerCount; i++){
//     this.observers.get(i).update( context );
//   }
// };
//
// // Extend an object with an extension
// function extend( obj, extension ){
//   for ( var key in extension ){
//     obj[key] = extension[key];
//   }
// }

const LEFT_OFFSET = 0.2;
const RIGHT_OFFSET = 0.2;
const TOP_OFFSET = 0.5;
const BOTTOM_OFFSET = 0.1;

function resized() {
  var wW = window.innerWidth;
  var wH = window.innerHeight;

  var obj = {
    width: wW,
    height: wH,
    dialogWidth: wW - (wW * LEFT_OFFSET) - (wW * RIGHT_OFFSET),
    dialogHeight: wH - (wH * TOP_OFFSET) - (wH * BOTTOM_OFFSET),
    orientation: screen.orientation || screen.mozOrientation || screen.msOrientation
  };

  console.log(obj);
  // update viewport items
  // update viewport display
}

function updateControlPreferences() {
  // to update what the user is actually using.
  // i.e. are they using touch?
  // are they using pointer/mouse?
  // are they using gamepad?
  // Only one form of inputs should be used.
  // Does this cater for multiple keyboard setups? WASD vs Arrow?


}



window.onresize = resized;
