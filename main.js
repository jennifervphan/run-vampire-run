var Colors = {
    darkblack: 0x000000,
    black: 0x1e2022,
    grey: 0x52616b,
    darkGrey: 0x303841,
    lightGrey: 0xc9d6df,
    lighterGrey: 0xf0f5f9,
    superLight: 0xeeeeee,
    red: 0xd72323
}
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


window.addEventListener('load', init, false);

function init() {
    // set up the scene, the camera and the renderer
    createScene();

    // add the lights
    createLights();

    // add the objects
    createWorld();
    // createVamp();
    // createBlood();
    // createGarlic();


    // start a loop that will update the objects' positions 
    // and render the scene on each frame
    // loop();
}