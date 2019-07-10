Vampire.prototype.run = function() {
    this.status = "running";
    var s = Math.min(speed, 50);
    this.runningCycle += delta * s * .7;
    this.runningCycle = this.runningCycle % (pi * 2);
    var t = this.runningCycle;

    this.body.position.y = 2 + Math.sin(t - pi / 2) * amp;

    this.torso.position.y = 15 + Math.sin(t - pi / 2) * amp * 0.5;

    this.head.position.y = 30 + Math.cos(t - pi / 2) * amp * .5;

    this.cape.rotation.z = Math.cos(t) * pi / 8;

    this.armL.rotation.x = Math.cos(t) * pi / 16;

    this.armL.rotation.y = Math.cos(t) * pi / 8;

    this.legR.position.z = (5 + Math.cos(t - pi / 2) * amp * .8);
    this.legR.position.y = 3;

    this.legL.position.z = (5 + Math.cos(t - pi / 2) * (-amp * .8));
    this.legL.position.y = 3;
}

Vampire.prototype.jump = function() {
    if (this.status == "jumping") return;
    this.status = "jumping";
    audioJump.play();
    var fixedThis = this;
    TweenMax.to(this.mesh.position, 0.8, { y: 50, ease: Power2.easeOut });
    TweenMax.to(this.legR.position, 0.8, { y: 5, ease: Power2.easeOut });
    TweenMax.to(this.legL.position, 0.8, { y: 5, ease: Power2.easeOut });
    TweenMax.to(this.mesh.position, 0.8, {
        y: 0,
        ease: Power4.easeIn,
        delay: 0.5,
        onComplete: function() {
            fixedThis.status = "running";
        }
    });
}

Vampire.prototype.caught = function() {
    this.mesh.rotation.y = -pi / 2;
    this.head.rotation.y = pi / 2;
    this.head.position.x = 0;
    this.torso.position.y = 0;
    this.head.position.y = 7.5;

}

Cross.prototype.run = function() {
    var s = Math.min(speed, 50);
    this.runningCycle += delta * s * .7;
    this.runningCycle = this.runningCycle % (pi * 2);
    var t = this.runningCycle;
    this.body.position.y = 25 + Math.sin(t - pi / 2) * amp;
    // this.spark.position.x = .2 + Math.sin(t - pi / 2) * amp * .1;
    // this.spark.position.y = 5 + Math.sin(t - pi / 2) * amp;
    // this.spark.position.z = 7.5 + Math.cos(t + 3.4);
    // // for (var i = 0; i < sparks.length; i++) {
    // //     sparks[i].position.x = .2 + Math.sin(t - Math.PI / 2) * amp * .1;
    // //     sparks[i].position.y = 5 + Math.sin(t - Math.PI / 2) * amp;
    // //     sparks[i].position.z = 7.5 + Math.cos(t + 3.4);
    // // }
}

Cross.prototype.win = function() {
    cross.body.rotation.x = 0;
    cross.body.rotation.z = pi / 8;
    cross.body.position.y = 20;
    cross.body.position.x = vamp.mesh.position.x;
    // cross.body.position.x = 0;

    cross.mesh.scale.set(2.5, 2.5, 2)
    gameStatus = "readyToReplay";
}

Garlic.prototype.hit = function() {
    audioHit.play();
    var _this = this;
    this.body.rotation.y += delta * 6;
    TweenMax.to(this.body.position, 0.5, {
        z: 200,
        ease: Power4.easeIn,
        delay: 0.05,
        onComplete: function() {
            _this.status = "ready";
            garlic.angle = -worldRotation - Math.random() * .4;
            garlic.angle = garlic.angle % (pi * 5);
            garlic.body.position.z = 0;
        }
    });
}

function updateBloodPosition() {
    blood.mesh.position.y = -worldRadius + Math.sin(worldRotation + blood.angle) * (worldRadius + 50);
    blood.mesh.position.x = Math.cos(worldRotation + blood.angle) * (worldRadius + 50);
}

function updateGarlicPosition() {
    if (garlic.status == "hit") return;
    if (worldRotation + garlic.angle > 2.5) {
        garlic.angle = -worldRotation - Math.random() * 0.5;
        garlic.body.rotation.y = Math.random() * pi * 2;

    }
    garlic.mesh.rotation.y = worldRotation + garlic.angle - pi / 2;
    garlic.mesh.rotation.z = worldRotation + garlic.angle - pi / 2;
    // garlic.mesh.position.z = 0;
    // garlic.mesh.position.z = Math.cos(worldRotation + garlic.angle) * (worldRadius + 3);
    garlic.mesh.position.y = -worldRadius + Math.sin(worldRotation + garlic.angle) * (worldRadius + 3);
    garlic.mesh.position.x = Math.cos(worldRotation + garlic.angle) * (worldRadius + 3);
}

function updateCrossPosition() {
    cross.run();
    crossVampPos -= delta * crossAcceleration;
    crossPos += (crossVampPos - crossPos) * delta;
    if (crossPos < .48) {
        gameOver();
    }
    var angle = pi * crossPos;
    cross.mesh.position.y = -worldRadius + Math.sin(angle) * (worldRadius + 12);
    cross.mesh.position.x = Math.cos(angle) * (worldRadius + 15);
}

function updateWorldRotation() {
    worldRotation += delta * .02 * speed;
    worldRotation = worldRotation % (pi * 2);
    world.rotation.z = worldRotation;
}