Vampire = function() {
    // this.status = "running";
    // this.runningCycle = 0;

    this.mesh = new THREE.Group();
    this.body = new THREE.Group();
    this.mesh.add(this.body);

    var torsoGeom = new THREE.CubeGeometry(7, 7, 15, 1);

    this.torso = new THREE.Mesh(torsoGeom, whiteMat);
    this.torso.position.z = 4;
    // this.torso.position.x = 4;
    this.torso.position.y = 12;
    this.torso.castShadow = true;
    this.body.add(this.torso);

    var pantsGeom = new THREE.CubeGeometry(9, 8, 8, 1);
    this.pants = new THREE.Mesh(pantsGeom, darkBlackMat);
    this.pants.position.z = -3;
    this.pants.position.y = 0;
    this.pants.castShadow = true;
    this.torso.add(this.pants);

    var shirtGeom = new THREE.CubeGeometry(3, 3, 7, 1);
    this.shirtR = new THREE.Mesh(shirtGeom, darkBlackMat);
    this.shirtR.position.x = 4;
    this.shirtR.position.y = 2;
    this.shirtR.position.z = 4;
    this.torso.add(this.shirtR);

    this.shirtL = this.shirtR.clone();
    this.shirtL.position.x = -this.shirtR.position.x;
    this.torso.add(this.shirtL);

    var capeGeom = new THREE.CubeGeometry(20, 1, 20, 1);
    capeGeom.vertices[5].x += 2;
    capeGeom.vertices[5].z += .5;

    capeGeom.vertices[7].x += 2;
    capeGeom.vertices[7].z -= .5;

    capeGeom.vertices[2].x -= 2;
    capeGeom.vertices[2].z -= .5;

    capeGeom.vertices[0].x -= 2;
    capeGeom.vertices[0].z += .5;
    capeGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 9, 0));
    this.cape = new THREE.Mesh(capeGeom, darkBlackMat);
    this.cape.position.x = 0;
    this.cape.position.z = -5;
    this.cape.position.y = 0;
    this.torso.add(this.cape);

    var headGeom = new THREE.CubeGeometry(10, 10, 13, 1);

    headGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 7.5));
    this.head = new THREE.Mesh(headGeom, whiteMat);
    this.head.position.z = 2;
    this.head.position.y = 25;
    this.head.castShadow = true;
    this.body.add(this.head);



    var cheekGeom = new THREE.CubeGeometry(1, 4, 4, 1);
    this.cheekR = new THREE.Mesh(cheekGeom, skinMat);
    this.cheekR.position.x = -5;
    this.cheekR.position.z = 7;
    this.cheekR.position.y = -2.5;
    this.cheekR.castShadow = true;
    this.head.add(this.cheekR);

    this.cheekL = this.cheekR.clone();
    this.cheekL.position.x = -this.cheekR.position.x;
    this.head.add(this.cheekL);

    var noseGeom = new THREE.CubeGeometry(5, 3, 3, 1);
    this.nose = new THREE.Mesh(noseGeom, whiteMat);
    this.nose.position.z = 14;
    this.nose.position.y = 2;
    this.nose.castShadow = true;
    this.head.add(this.nose);

    var mouthGeom = new THREE.CubeGeometry(4, 2, 4, 1);
    mouthGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 3));
    mouthGeom.applyMatrix(new THREE.Matrix4().makeRotationX(Math.PI / 12));
    this.mouth = new THREE.Mesh(mouthGeom, redMat);
    this.mouth.position.z = 8;
    this.mouth.position.y = -4;
    this.mouth.castShadow = true;
    this.head.add(this.mouth);


    var pawFGeom = new THREE.CubeGeometry(4, 4, 4, 1);
    this.pawFR = new THREE.Mesh(pawFGeom, darkBlackMat);
    this.pawFR.position.x = -2;
    this.pawFR.position.z = 0;
    this.pawFR.position.y = 1.5;
    this.pawFR.castShadow = true;
    this.body.add(this.pawFR);

    this.pawFL = this.pawFR.clone();
    this.pawFL.position.x = -this.pawFR.position.x;
    this.pawFL.castShadow = true;
    this.body.add(this.pawFL);

    var earGeom = new THREE.CubeGeometry(2, 3, 2, 1);
    earGeom.vertices[6].x += 1;
    earGeom.vertices[6].z += .5;

    earGeom.vertices[7].x += 1;
    earGeom.vertices[7].z -= .5;

    earGeom.vertices[2].x -= 1;
    earGeom.vertices[2].z -= .5;

    earGeom.vertices[3].x -= 1;
    earGeom.vertices[3].z += .5;
    earGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 9, 0));

    this.earL = new THREE.Mesh(earGeom, redMat);
    this.earL.position.x = 1;
    this.earL.position.z = 13;
    this.earL.position.y = -15;
    this.earL.rotation.z = -Math.PI / 12;
    this.earL.castShadow = true;
    this.head.add(this.earL);

    this.earR = this.earL.clone();
    this.earR.position.x = -this.earL.position.x;
    this.earR.rotation.z = -this.earL.rotation.z;
    this.earR.castShadow = true;
    this.head.add(this.earR);

    var eyeGeom = new THREE.CubeGeometry(2, 2, 3);

    this.eyeL = new THREE.Mesh(eyeGeom, whiteMat);
    this.eyeL.position.x = 5;
    this.eyeL.position.z = 7;
    this.eyeL.position.y = 2.5;
    this.eyeL.castShadow = true;
    this.head.add(this.eyeL);

    var irisGeom = new THREE.CubeGeometry(.6, 2, 2);

    this.iris = new THREE.Mesh(irisGeom, blackMat);
    this.iris.position.x = 1.2;
    this.iris.position.y = 1;
    this.iris.position.z = 1;
    this.eyeL.add(this.iris);

    this.eyeR = this.eyeL.clone();
    this.eyeR.children[0].position.x = -this.iris.position.x;
    this.eyeR.position.x = -this.eyeL.position.x;
    this.head.add(this.eyeR);

    var armGeom = new THREE.CubeGeometry(2, 7, 3, 1);
    this.armR = new THREE.Mesh(armGeom, darkBlackMat);
    this.armR.position.x = 6;
    this.armR.position.y = 14;
    this.armR.position.z = 9;
    this.armR.castShadow = true;
    this.body.add(this.armR);

    this.armL = this.armR.clone();
    this.armL.position.x = -this.armR.position.x;
    this.armL.castShadow = true;
    this.body.add(this.armL);

    var hairGeom = new THREE.BoxGeometry(11, 7, 5);
    this.hair = new THREE.Mesh(hairGeom, blackMat);
    this.hair.position.y = 3;
    this.hair.position.z = 1;
    this.head.add(this.hair);


    this.armR.rotation.x = -Math.PI / 4;
    this.armL.rotation.x = -Math.PI / 4;
    this.cape.rotation.x = Math.PI / 4;
    this.torso.rotation.x = -Math.PI / 3;

    this.body.traverse(function(object) {
        if (object instanceof THREE.Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;
        }
    });
}

function createVamp() {
    vamp = new Vampire();
    vamp.mesh.rotation.y = Math.PI / 2;
    scene.add(vamp.mesh);
}