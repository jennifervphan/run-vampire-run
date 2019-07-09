Blood = function() {
    this.angle = 0;
    this.mesh = new THREE.Group();
    var bloodGeom = new THREE.CylinderGeometry(5, 3, 10, 4, 1);
    bloodGeom.vertices[8].y += 2;
    bloodGeom.vertices[9].y -= 3;

    this.blood = new THREE.Mesh(bloodGeom, redMat);
    // this.blood.position.y = 40;
    this.blood.castShadow = true;
    this.mesh.add(this.blood);
}

function createBlood() {
    blood = new Blood();
    scene.add(blood.mesh);
}

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

Garlic = function() {

}

// var torsoGeom = new THREE.CubeGeometry(20, 20, 20, 1);
// this.torso = new THREE.Mesh(torsoGeom, whiteMat);
// this.torso.position.z = 0;
// this.torso.position.y = 25;
// this.torso.castShadow = true;
// this.body.add(this.torso);

// var pantsGeom = new THREE.CubeGeometry(20, 5, 20, 1);
// this.pants = new THREE.Mesh(pantsGeom, darkBlackMat);
// this.pants.position.z = 0;
// this.pants.position.y = -15;
// this.pants.castShadow = true;
// this.torso.add(this.pants);

// var legGeom = new THREE.CubeGeometry(5, 5, 5, 1);
// this.legR = new THREE.Mesh(legGeom, darkBlackMat);
// this.legR.position.x = -4;
// this.legR.position.z = -4;
// this.legR.position.y = 1.5;
// this.legR.castShadow = true;
// this.body.add(this.legR);

// this.legL = this.legR.clone();
// this.legL.position.x = -this.legR.position.x;
// this.legL.castShadow = true;
// this.body.add(this.legL);

// var headGeom = new THREE.CubeGeometry(10, 10, 10, 1);
// this.head = new THREE.Mesh(headGeom, skinMat);
// this.head.position.x = 0;
// this.head.position.z = 0;
// this.head.position.y = 13;
// this.head.castShadow = true;
// this.torso.add(this.head);

// var cheekGeom = new THREE.CubeGeometry(2, 5, 4, 1);
// this.cheekR = new THREE.Mesh(cheekGeom, redMat);
// this.cheekR.position.x = -5;
// this.cheekR.position.z = 0;
// this.cheekR.position.y = 1.5;
// this.cheekR.castShadow = true;
// this.head.add(this.cheekR);

// this.cheekL = this.cheekR.clone();
// this.cheekL.position.x = -this.cheekR.position.x;
// this.head.add(this.cheekL);
// var plane = new THREE.Object3D();

// // Create the cabin
// var geomCockpit = new THREE.BoxGeometry(60, 50, 50, 1, 1, 1);
// var matCockpit = new THREE.MeshPhongMaterial({ color: Colors.red, shading: THREE.FlatShading });
// var cockpit = new THREE.Mesh(geomCockpit, matCockpit);
// cockpit.castShadow = true;
// cockpit.receiveShadow = true;
// plane.add(cockpit);
// plane.position.set(-35, 150, 0);
// this.torso.rotation.x = Math.PI / 8;