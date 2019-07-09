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
var ambientLight;
var world;
var worldRadius = 200;
var worldRotation = 0;
var pi = Math.PI;
var speed = 8;
var maxSpeed = 50;
var initSpeed = 5;
var delta = 0;
var amp = 4;
var disp = .2;
var vamp;
var cameraPosGame = 160;
// var cameraPosGameOver = 260;
var crossPos = .60;
var crossVampPos = .60;
var crossAcceleration = 0.003;
var vampacceleration = 0.004;
var level = 1;
var levelInterval;
var levelUpdateFreq = 3000;
var collisionObstacle = 10;
var collisionBonus = 30;
var fieldGameOver;
var fieldDistance;
var progressWidth = 1;
var bloodBar = 50;
var element = document.getElementById("myprogressBar");
var audioJump = new Audio('386529__glennm__breathing-jumping.wav');
var audioHit = new Audio('35445__inkington__hit-mic00.wav');
var audioBackground = new Audio('Toccata and Fugue in D Minor.mp3')



window.addEventListener('load', init, false);

$(window).keypress(function(e) {
    if (e.which === 32) {
        if (gameStatus == "play")
            vamp.jump();
        else if (gameStatus == "readyToReplay") {
            replay();
        }
    }
});

function loop() {
    delta = clock.getDelta();
    if (gameStatus == "play") {
        if (vamp.status == "running") {
            vamp.run();
            cross.run();
        }
        // updateDistance();
        updateWorldRotation();
        updateBloodPosition();
        updateGarlicPosition();
        updateCrossPosition();
        checkCollision();
        progessBar()
    }
    render();
    requestAnimationFrame(loop);
}

function init() {
    gameStatus = "play";

    // set up the scene, the camera and the renderer
    createScene();

    // add the lights
    createLights();

    // add the objects
    createWorld();
    createForest();
    createVamp();
    createBlood();
    createGarlic();
    createCross();

    // resetGame();

    // start a loop that will update the objects' positions 
    // and render the scene on each frame
    loop();
}