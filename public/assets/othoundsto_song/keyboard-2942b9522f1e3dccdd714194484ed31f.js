// $(function() {
//
//   if(typeof Othoundsto === "undefined") {
//     window.Othoundsto = {};
//   }
//
// key = [];
//
// onkeyup = function(e) {
//   key[e.keyCode] = false;
// }
//
// onkeydown = function(e) {
//   key[e.keyCode] = true;
//   if (songStarted == false && canvas) {
//     Othoundsto.songLoop();
//     songStarted = true;
//   }
// }
//
// Othoundsto.manualControls = function() {
//   if(key[38]) { rotation -= 0.001 };
//   if(key[40]) { rotation += 0.001 };
//   if(key[37]) {
//     progress[0] -= Math.cos(-rotation);
//     progress[1] -= Math.sin(-rotation);
//   };
//   if(key[39]) {
//     progress[0] += Math.cos(-rotation);
//     progress[1] += Math.sin(-rotation);
//   };
// }
//
// });
