var canvas = document.querySelector('.thousoondthCanvas');
var ctx = canvas.getContext('2d');
WIDTH = HEIGHT = canvas.width = canvas.height = 800;
ctx.lineWidth = 1;
RESOLUTION_DEPTH = 12;

function superTile   (resLayer, pos, white) {
  q( function() {
    houndstooth  (resLayer + 1, [ pos[0] + .5, pos[1] + .5], !white );
    houndstooth  (resLayer + 1, pos                        , white  );
  }, resLayer );
};

function houndstooth (resLayer, pos, white) {
  q( function() {
    square        (resLayer, [ 2 * pos[0]    , 2 * pos[1]     ], white        );
    magicTriangle (resLayer, [ 2 * pos[0] + 1, 2 * pos[1]     ], !white, true,  false, false );
    magicTriangle (resLayer, [ 2 * pos[0]    , 2 * pos[1] + 1 ], white , true,  false, true  );
    magicTriangle (resLayer, [ 2 * pos[0] - 1, 2 * pos[1]     ], white , false, false, true  );
    magicTriangle (resLayer, [ 2 * pos[0]    , 2 * pos[1] - 1 ], !white, false, false, false );
  }, resLayer );
};

for (var i = 0; i < RESOLUTION_DEPTH + 5; i++) {
  timedQueue.push([]);
}

q( function() {
  superTile (0, [ 0, 0 ], true);
  magicEdge (1, [ 1, 0 ], true);
}, 0 );

mainLoop();
