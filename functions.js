// function updateDistance() {
//     fieldDistance = document.getElementById("distValue");
//     distance += delta * speed;
//     var d = distance / 2;
//     fieldDistance.innerHTML = Math.floor(d);
// }

// function updateLevel() {
//     if (speed >= maxSpeed) return;
//     level++;
//     speed += 2;
// }


// function replay() {
//     gameStatus = "preparingToReplay"
//     $("#gameoverInstructions").removeClass();
//     TweenMax.killTweensOf(cross.body.position);
//     // TweenMax.to(camera.position, 3, { z: cameraPosGame, x: 0, y: 30, ease: Power4.easeInOut });
//     // TweenMax.to(cross.body.rotation, 1, {
//     //     x: .4,
//     //     ease: Power4.easeIn,
//     //     delay: 1,
//     //     onComplete: function() {

//     resetGame();
//     //     }
//     // });

// }

// function resetGame() {
//     scene.add(vamp.mesh);
//     vamp.mesh.rotation.y = Math.PI / 2;
//     vamp.mesh.position.y = 0;
//     vamp.mesh.position.z = 0;
//     vamp.mesh.position.x = 0;

//     crossPos = 56;
//     crossPosTarget = 65;
//     speed = initSpeed;
//     level = 0;
//     distance = 0;
//     blood.mesh.visible = true;
//     garlic.mesh.visible = true;
//     gameStatus = "play";
//     vamp.status = "running";
//     // hero.nod();
//     // audio.play();
//     updateLevel();
//     levelInterval = setInterval(updateLevel, levelUpdateFreq);
// }




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
    // garlic.status = "hit";
    crossVampPos -= .01;
    // garlic.angle -= Math.PI / 2;
    garlic.hit();
    // bloodBar -= 5;
    // progessBar();
}

function getBlood() {
    blood.angle -= Math.PI / 3;
    speed *= 1.2;
    crossVampPos += .01;
    progressBarGetBlood();
}

function progressBarGetBlood() {
    var element = document.getElementById("myprogressBar");
    if (bloodBar <= 75) {
        bloodBar = bloodBar + 25;
        var x = 100 - (bloodBar)
        element.style.width = (100 - x) + '%';
        progessBar();
    } else {
        element.style.width = 100 + '%';
        progessBar();
    }
}

function progessBar() {
    setInterval(scene, delta * 100000);

    function scene() {
        bloodBar -= 0.5;
        element.style.width = (bloodBar) + '%';
        bloodBar = bloodBar;
        noBlood();
    }
}

function noBlood() {
    if (bloodBar === 0) {
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
    element.style.width = (bloodBar) + '%';
}