$(function() {

  $('iframe').css({
    top: '0px !important',
    left: '0px !important',
    bottom: '0px !important',
    right: '0px !important',
    width: '100%  !important',
    height: '100% !important',
    border: 'none !important',
    margin: '0 !important',
    padding: '0 !important',
    overflow: 'hidden !important',
    'z-index': '999999 !important',
    position: 'fixed !important',
    display: 'block !important',
    'line-height': '0 !important'
  });
  $('frame').css({
    top: '0px !important',
    left: '0px !important',
    bottom: '0px !important',
    right: '0px !important',
    width: '100%  !important',
    height: '100% !important',
    border: 'none !important',
    margin: '0 !important',
    padding: '0 !important',
    overflow: 'hidden !important',
    'z-index': '999999 !important',
    position: 'fixed !important',
    display: 'block !important',
    'line-height': '0 !important'
  });
  $('frameset').css({
    top: '0px !important',
    left: '0px !important',
    bottom: '0px !important',
    right: '0px !important',
    width: '100%  !important',
    height: '100% !important',
    border: 'none !important',
    margin: '0 !important',
    padding: '0 !important',
    overflow: 'hidden !important',
    'z-index': '999999 !important',
    position: 'fixed !important',
    display: 'block !important',
    'line-height': '0 !important'
  });


VM4883:2 Uncaught TypeError: $(...).css is not a function(…)(anonymous function) @ VM4883:2InjectedScript._evaluateOn @ (program):878InjectedScript._evaluateAndWrap @ (program):811InjectedScript.evaluate @ (program):667

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 1, 10000 );

// var c = $("#myCanvas");
var renderer = new THREE.WebGLRenderer({canvas: myCanvas, alpha: true});
// renderer.setSize(800, 400);

// var renderer = new THREE.WebGLRenderer({alpha: true});
// renderer.setClearColor( 0xffffff, 0);
// renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMapEnabled = true;

renderer.shadowCameraNear = 3;
renderer.shadowCameraFar = camera.far;
renderer.shadowCameraFov = 50;

renderer.shadowMapBias = 0.0039;
renderer.shadowMapDarkness = 0.5;
renderer.shadowMapWidth = 1024;
renderer.shadowMapHeight = 1024;
// document.body.appendChild( renderer.domElement );


var texture = new THREE.Texture();

var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set( -2, -2, -1 );
directionalLight.target.position.set(2,4,1 );

var spotLight = new THREE.SpotLight();
spotLight.position.set( 2, 4, 1 );
spotLight.castShadow = true;

spotLight.shadowMapWidth = 512;
spotLight.shadowMapHeight = 512;

var d = 200;

spotLight.shadowCameraLeft = -d;
spotLight.shadowCameraRight = d;
spotLight.shadowCameraTop = d;
spotLight.shadowCameraBottom = -d;

spotLight.shadowCameraNear = 1;
spotLight.shadowCameraFar = 1000;
spotLight.shadowDarkness = 0.5;

scene.add( spotLight );

camera.position.z = 5;

controls = new THREE.OrbitControls( camera , renderer.domElement);
controls.damping = 0.2;

var manager = new THREE.LoadingManager();

onProgress = function ( item, loaded, total ) {
  console.log( item, loaded, total );
};

onError = function ( xhr ) {
};

var loader = new THREE.OBJLoader( manager );
var obj_path = iHateYou;
loader.load(obj_path, function ( object ) {



  object.traverse( function ( child ) {

    if ( child instanceof THREE.Mesh ) {

      child.material = new THREE.MeshLambertMaterial( { color: 0xdddddd } );
      child.castShadow = true;
      child.receiveShadow = true;

    }

  } );

  window.bob = object;

  scene.add( object );

});

var render = function () {
  requestAnimationFrame( render );

  window.bob.rotation.x += 0.001;
  window.bob.rotation.y += 0.001;

  renderer.render(scene, camera);
};

render();

});
