$(function() {

  if(typeof Othoundsto === "undefined") {
    window.Othoundsto = {};
  }

curTargetRotation = 0;
curGapToClose = 0.2449786631;
rotation = 0.0;
progress = [0.0, 0,0];
songStarted = false;

SPEED = 10;
VERTEX_EMPHASIS_AMOUNT = 4;

TARGET_ROTATIONS = [
  -0.2449786631,
  0.2449786631,
  -0.3217505544,
  0.3217505544,
  -0.3805063771,
  0.3805063771,
  -0.463647609,
  0.463647609,
  -0.5880026035,
  0.5880026035,
  -0.6435011088,
  0.6435011088,
  -0.7853981634,
  0.7853981634
] //then you would keep going to the other half of the circle by summing...

function playCursorProgresses() {
  progress[0] += Math.cos(-rotation);
  progress[1] += Math.sin(-rotation);
};

function rotationProgresses() {
  if (Math.abs(rotation - TARGET_ROTATIONS[curTargetRotation]) < 0.001) {
    curTargetRotation += 1;
    curGapToClose = TARGET_ROTATIONS[curTargetRotation] - rotation;
  } else if (rotation < TARGET_ROTATIONS[curTargetRotation]) {
    rotation += 0.0001 + 0.001 * (
      1 - Math.cos((Math.abs(TARGET_ROTATIONS[curTargetRotation] - rotation) /
    curGapToClose) * 2 * Math.PI));
  } else if (rotation > TARGET_ROTATIONS[curTargetRotation]) {
    rotation -= 0.0001 + 0.001 * (
      1 - Math.cos((Math.abs(TARGET_ROTATIONS[curTargetRotation] - rotation) /
    curGapToClose) * 2 * Math.PI));
  }
};

Othoundsto.songLoop = function() {
  // Othoundsto.manualControls();
  playCursorProgresses();
  rotationProgresses();
  Othoundsto.tileHoundsteeth(rotation, progress);
  Othoundsto.drawPlayCursor();
  setTimeout(Othoundsto.songLoop, SPEED);
};

Othoundsto.songLoop();

});
