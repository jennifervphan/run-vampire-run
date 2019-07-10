function checkCollision() {
    var db = vamp.mesh.position.clone().sub(blood.mesh.position.clone());
    var dm = vamp.mesh.position.clone().sub(garlic.mesh.position.clone());
    if (db.length() < collisionBonus) {
        getBlood();
    }
    if (dm.length() < collisionObstacle && garlic.status != "hit") {
        hitGarlic();
    }
}

function hitGarlic() {
    garlic.status = "hit";
    crossVampPos -= .01;
    garlic.hit();
    bloodBar -= 5;
    // progessBar();
}

function getBlood() {
    blood.angle -= pi / 2;
    speed *= 1.2;
    crossVampPos += .03;
    progressBarGetBlood();
}

function progressBarGetBlood() {
    var element = document.getElementById("myprogressBar");
    if (bloodBar <= 75) {
        bloodBar = bloodBar + 25;
        var x = 100 - (bloodBar)
        element.style.width = (100 - x) + '%';
        progressBar();
    } else {
        element.style.width = 100 + '%';
        progressBar();
    }
}

function progressBar() {
    setInterval(scene, delta * 100000);

    function scene() {
        bloodBar -= 0.4;
        element.style.width = (bloodBar) + '%';
        bloodBar = bloodBar;
        noBlood();
    }
}

function noBlood() {
    if (bloodBar <= 0) {
        gameOver();
    }
}

function gameOver() {
    $("#gameoverInstructions").addClass("show");
    gameStatus = "gameOver";
    cross.win();
    vamp.caught();
    blood.mesh.visible = false;
    garlic.mesh.visible = false;
    TweenMax.to(camera.position, 2, { z: cameraGameOver, y: 30, x: 0 });
}