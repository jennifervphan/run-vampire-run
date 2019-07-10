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
var vamp;
var fieldDistance;
var worldRadius = 200;
var worldRotation = 0;
var pi = Math.PI;
var speed = 8;
var initSpeed = 5;
var delta = 0;
var amp = 4;
var cameraPosGame = 140;
var cameraGameOver = 200;
var crossPos = .60;
var crossVampPos = .60;
var crossAcceleration = 0.003;
var vampacceleration = 0.004;
var levelUpdateFreq = 3000;
var collisionObstacle = 20;
var collisionBonus = 30;
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
        progressBar();
    }
    render();
    requestAnimationFrame(loop);
}

function init() {
    audioBackground.play();
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