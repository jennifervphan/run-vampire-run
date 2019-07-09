var scene;
var camera;
var fieldOfView;
var aspectRatio;
var nearPlane;
var farPlane;
var renderer;
var container;
var height;
var width;
var hemisphereLight;
var shadowLight;
var world;
var worldRadius = 200;
var worldRotation = 0;
var speed = 5;
var delta = 0;
var vamp;
var cameraPosGame = 160;
var cameraPosGameOver = 260;


window.addEventListener('load', init, false);

function init() {
    // set up the scene, the camera and the renderer
    createScene();

    // add the lights
    createLights();

    // add the objects
    createWorld();
    // createTrees();
    createVamp();
    createBlood();
    // createGarlic();

    // resetGame();
    // start a loop that will update the objects' positions 
    // and render the scene on each frame
    loop();
}