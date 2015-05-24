var timedQueue = [];
SPEED = 0;

function q(fn, resLayer) {
  timedQueue[resLayer].push(fn);
};

var mainLoop = setInterval (
  function() {
    if (timedQueue.flatten().length == 0) { clearInterval(mainLoop); }
    for (var i = 0; i < RESOLUTION_DEPTH + 5; i++) {
      if ( timedQueue[i].length > 0 ) {
        timedQueue[i].shift().call();
        break;
      }
    }
  },
  SPEED
);

Array.prototype.flatten = function flatten() {
  var output = [];
  return output.concat.apply(output, this);
};
