Vampire.prototype.run = function() {
    this.status = "running";
    audioBackground.play();
    var s = Math.min(speed, maxSpeed);

    this.runningCycle += delta * s * .7;
    this.runningCycle = this.runningCycle % (Math.PI * 2);
    var t = this.runningCycle;

    this.body.position.y = 2 + Math.sin(t - Math.PI / 2) * amp;

    this.torso.position.y = 15 + Math.sin(t - Math.PI / 2) * amp * 0.5;

    this.head.position.y = 30 + Math.cos(t - Math.PI / 2) * amp * .5;

    this.cape.rotation.z = Math.cos(t) * Math.PI / 8;

    this.armL.rotation.x = Math.cos(t) * Math.PI / 16;

    this.armL.rotation.y = Math.cos(t) * Math.PI / 8;

    this.legR.position.z = (5 + Math.cos(t - Math.PI / 2) * amp * .8);
    this.legR.position.y = 1;

    this.legL.position.z = (5 + Math.cos(t - Math.PI / 2) * (-amp * .8));
    this.legL.position.y = 1;
}

Vampire.prototype.jump = function() {
    if (this.status == "jumping") return;
    this.status = "jumping";
    audioJump.play();
    var _this = this;
    TweenMax.to(this.mesh.position, 0.8, { y: 40, ease: Power2.easeOut });
    TweenMax.to(this.legR.position, 0.8, { y: 5, ease: Power2.easeOut });
    TweenMax.to(this.legL.position, 0.8, { y: 5, ease: Power2.easeOut });
    TweenMax.to(this.mesh.position, 0.8, {
        y: 0,
        ease: Power4.easeIn,
        delay: 0.8,
        onComplete: function() {
            _this.status = "running";
        }
    });
}

Vampire.prototype.caught = function() {
    this.mesh.rotation.y = -pi / 2
        // this.torso.mesh.visible = false;
    this.head.rotation.y = pi / 2;

    this.head.position.y = 0;
    this.torso.position.y = 0;
    this.head.position.y = 5;

}

Cross.prototype.run = function() {
    var s = Math.min(speed, maxSpeed);
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
    cross.body.rotation.y = 0;
    cross.body.rotation.x = 0;
    cross.body.position.y = 30;
    cross.body.position.x = 8;
    gameStatus = "readyToReplay";
}

Garlic.prototype.hit = function() {
    audioHit.play();
    garlic.angle += Math.PI / 3;

    var _this = this;
    this.body.rotation.y += delta * 6;
    // garlic.body.position.z=50;
    TweenMax.to(this.body.position, 0.8, {
        z: 200,
        ease: Power4.easeIn,
        delay: 1,
        onComplete: function() {
            _this.status = "ready";
        }
    });
}

function updateBloodPosition() {
    // blood.mesh.rotation.y += delta * 6;
    // blood.mesh.rotation.z = Math.PI / 2 - (worldRotation + blood.angle);
    blood.mesh.position.y = -worldRadius + Math.sin(worldRotation + blood.angle) * (worldRadius + 50);
    blood.mesh.position.x = Math.cos(worldRotation + blood.angle) * (worldRadius + 50);
}

function updateGarlicPosition() {
    // if (garlic.status == "hit") return;
    // else {
    //     garlic.status = "ready";
    garlic.mesh.rotation.z = worldRotation + garlic.angle - Math.PI / 2;
    // garlic.mesh.position.z = Math.cos(worldRotation + garlic.angle) * (worldRadius + 3);
    garlic.mesh.position.y = -worldRadius + Math.sin(worldRotation + garlic.angle) * (worldRadius + 3);
    garlic.mesh.position.x = Math.cos(worldRotation + garlic.angle) * (worldRadius + 3);
    // }
}

function updateCrossPosition() {
    cross.run();
    crossVampPos -= delta * crossAcceleration;
    crossPos += (crossVampPos - crossPos) * delta;
    if (crossPos < .51) {
        gameOver();
    }
    var angle = Math.PI * crossPos;
    cross.mesh.position.y = -worldRadius + Math.sin(angle) * (worldRadius + 12);
    cross.mesh.position.x = Math.cos(angle) * (worldRadius + 15);
}

function updateWorldRotation() {
    worldRotation += delta * .02 * speed;
    worldRotation = worldRotation % (Math.PI * 2);
    world.rotation.z = worldRotation;
}