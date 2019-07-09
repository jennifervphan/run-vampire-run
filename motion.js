// Hero.prototype.run = function() {
//     this.status = "running";

//     var s = Math.min(speed, maxSpeed);

//     this.runningCycle += delta * s * .7;
//     this.runningCycle = this.runningCycle % (Math.PI * 2);
//     var t = this.runningCycle;

//     var amp = 4;
//     var disp = .2;

//     // BODY

//     this.body.position.y = 6 + Math.sin(t - Math.PI / 2) * amp;
//     this.body.rotation.x = .2 + Math.sin(t - Math.PI / 2) * amp * .1;

//     this.torso.rotation.x = Math.sin(t - Math.PI / 2) * amp * .1;
//     this.torso.position.y = 7 + Math.sin(t - Math.PI / 2) * amp * .5;

// MOUTH
// this.mouth.rotation.x = Math.PI / 16 + Math.cos(t) * amp * .05;

// // HEAD
// this.head.position.z = 2 + Math.sin(t - Math.PI / 2) * amp * .5;
// this.head.position.y = 8 + Math.cos(t - Math.PI / 2) * amp * .7;
// this.head.rotation.x = -.2 + Math.sin(t + Math.PI) * amp * .1;

// // EARS
// this.earL.rotation.x = Math.cos(-Math.PI / 2 + t) * (amp * .2);
// this.earR.rotation.x = Math.cos(-Math.PI / 2 + .2 + t) * (amp * .3);

// // EYES
// this.eyeR.scale.y = this.eyeL.scale.y = .7 + Math.abs(Math.cos(-Math.PI / 4 + t * .5)) * .6;

// // TAIL
// this.tail.rotation.x = Math.cos(Math.PI / 2 + t) * amp * .3;

// // FRONT RIGHT PAW
// this.pawFR.position.y = 1.5 + Math.sin(t) * amp;
// this.pawFR.rotation.x = Math.cos(t) * Math.PI / 4;


// this.pawFR.position.z = 6 - Math.cos(t) * amp * 2;

// // FRONT LEFT PAW

// this.pawFL.position.y = 1.5 + Math.sin(disp + t) * amp;
// this.pawFL.rotation.x = Math.cos(t) * Math.PI / 4;


// this.pawFL.position.z = 6 - Math.cos(disp + t) * amp * 2;

// // BACK RIGHT PAW
// this.pawBR.position.y = 1.5 + Math.sin(Math.PI + t) * amp;
// this.pawBR.rotation.x = Math.cos(t + Math.PI * 1.5) * Math.PI / 3;


// this.pawBR.position.z = -Math.cos(Math.PI + t) * amp;

// // BACK LEFT PAW
// this.pawBL.position.y = 1.5 + Math.sin(Math.PI + t) * amp;
// this.pawBL.rotation.x = Math.cos(t + Math.PI * 1.5) * Math.PI / 3;


// this.pawBL.position.z = -Math.cos(Math.PI + t) * amp;


// }

function updateBloodPosition() {
    blood.mesh.rotation.y += delta * 6;
    blood.mesh.rotation.z = Math.PI / 2 - (floorRotation + carrot.angle);
    blood.mesh.position.y = -floorRadius + Math.sin(floorRotation + carrot.angle) * (floorRadius + 50);
    blood.mesh.position.x = Math.cos(floorRotation + carrot.angle) * (floorRadius + 50);
}

function updateWorldRotation() {
    worldRotation += delta * .03 * speed;
    worldRotation = worldRotation % (Math.PI * 2);
    world.rotation.z = worldRotation;
}

function loop() {
    delta = clock.getDelta();
    updateWorldRotation();
    render();
    requestAnimationFrame(loop);

}