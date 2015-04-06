$(function() {

  if(typeof Othoundsto === "undefined") {
    window.Othoundsto = {};
  }

BASE_PITCH = 100; //in Hz

maxFreq = 6000;
maxVol = 0.02;
initialVol = 0.001;
audioCtx = new (window.AudioContext || window.webkitAudioContext)();

Othoundsto.updateVoice = function(collision, yValOfCollision, proximityToLineSegmentEndpoint) {
  var oscillator = collision[0];
  var gainNode = collision[1];
  mapToLogarithmicPitchSpace(oscillator, yValOfCollision);
  mapToPitchCircularAmplitudeCurve(gainNode, yValOfCollision);
  mapAmplitudeToVertexProximity(gainNode, proximityToLineSegmentEndpoint);
};

function mapToLogarithmicPitchSpace(oscillator, yValOfCollision) {
  oscillator.frequency.value =
    BASE_PITCH * Math.pow(2,
      NUM_OCTAVES - (yValOfCollision - MIN_Y_COLLISION) / SIGMA
    );
};

function mapToPitchCircularAmplitudeCurve(gainNode, yValOfCollision) {
  gainNode.gain.value = initialVol *
    Math.pow(Math.E,
      Math.pow(
        yValOfCollision - Y_RANGE,
        2
      ) / (
        -2 * Math.pow( SIGMA , 2 )
      )
    );
};

function mapAmplitudeToVertexProximity(gainNode, proximityToLineSegmentEndpoint) {
  gainNode.gain.value *= proximityToLineSegmentEndpoint;
};

Othoundsto.initializeVoice = function (yValOfCollision, proximityToLineSegmentEndpoint) {
  newVoice = [
    audioCtx.createOscillator(),
    audioCtx.createGain()
  ];

  newVoice[0].connect(newVoice[1]);
  newVoice[1].connect(audioCtx.destination);
  newVoice[0].type = 'square';
  Othoundsto.updateVoice(newVoice, yValOfCollision, proximityToLineSegmentEndpoint);
  newVoice[0].start(0);

  return newVoice;
};

});
