var Colors = {
    darkBlack: 0x000000,
    black: 0x1e2022,
    grey: 0x52616b,
    darkGrey: 0x303841,
    lightGrey: 0xc9d6df,
    lighterGrey: 0xf0f5f9,
    superLight: 0xeeeeee,
    white: 0xffffff,
    red: 0xd72323,
    skin: 0xf7e4e5
}
var darkBlackMat = new THREE.MeshPhongMaterial({
    color: Colors.darkBlack,
    shading: THREE.FlatShading
});
var blackMat = new THREE.MeshPhongMaterial({
    color: Colors.black,
    shading: THREE.FlatShading
});
var greyMat = new THREE.MeshPhongMaterial({
    color: Colors.grey,
    shading: THREE.FlatShading
});
var darkGreyMat = new THREE.MeshPhongMaterial({
    color: Colors.darkGrey,
    shading: THREE.FlatShading
});
var lightGreyMat = new THREE.MeshPhongMaterial({
    color: Colors.lightGrey,
    shading: THREE.FlatShading
});
var lighterGreyMat = new THREE.MeshPhongMaterial({
    color: Colors.lighterGrey,
    shading: THREE.FlatShading
});
var superLightMat = new THREE.MeshPhongMaterial({
    color: Colors.superLight,
    shading: THREE.FlatShading
});
var whiteMat = new THREE.MeshPhongMaterial({
    color: Colors.white,
    shading: THREE.FlatShading
});
var redMat = new THREE.MeshPhongMaterial({
    color: Colors.red,
    shading: THREE.FlatShading
});
var skinMat = new THREE.MeshPhongMaterial({
    color: Colors.skin,
    shading: THREE.FlatShading
});

function createScene() {
    height = window.innerHeight;
    width = window.innerWidth;

    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(Colors.black, 160, 350);

    aspectRatio = width / height;
    fieldOfView = 60;
    nearPlane = 1;
    farPlane = 2000;

    camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
    camera.position.x = 0;
    camera.position.y = 30;
    camera.position.z = cameraPosGame;
    camera.lookAt(new THREE.Vector3(0, 30, 0));

    renderer = new THREE.WebGLRenderer({
        // transparency to show gradient in background
        alpha: true,
        antialias: true
    });
    // fill the entire screen
    renderer.setSize(width, height);
    // enable shadow rendering
    renderer.shadowMap.enabled = true;
    render();

    container = document.getElementById('world');
    container.appendChild(renderer.domElement);
    // change camera position when resize the page
    window.addEventListener('resize', handleWindowResize, false);
    // document.addEventListener('mousedown', handleMouseDown, false);
    // document.addEventListener("touchend", handleMouseDown, false);

    clock = new THREE.Clock();
}

var render = function() {
    // mesh.rotation.x += 0.05;
    // mesh.rotation.y += 0.05;
    renderer.render(scene, camera);
}

function handleWindowResize() {
    height = window.innerHeight;
    width = window.innerWidth;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}

function createLights() {
    hemisphereLight = new THREE.HemisphereLight(Colors.black, Colors.darkGrey, .9);
    shadowLight = new THREE.DirectionalLight(0xffffff, .9);
    // direction of light
    shadowLight.position.set(150, 350, 350);
    shadowLight.castShadow = true;
    shadowLight.shadow.camera.left = -400;
    shadowLight.shadow.camera.right = 400;
    shadowLight.shadow.camera.top = 400;
    shadowLight.shadow.camera.bottom = -400;
    shadowLight.shadow.camera.near = 1;
    shadowLight.shadow.camera.far = 1000;
    shadowLight.shadow.mapSize.width = 2048;
    shadowLight.shadow.mapSize.height = 2048;
    scene.add(hemisphereLight);
    scene.add(shadowLight);
}

function createWorld() {
    worldShadow = new THREE.Mesh(new THREE.SphereGeometry(worldRadius, 50, 50), new THREE.MeshPhongMaterial({
        color: Colors.black,
        specular: 0x000000,
        shininess: 1,
        transparent: true,
        opacity: .5,
        shading: THREE.FlatShading,

    }));
    //floorShadow.rotation.x = -Math.PI / 2;
    worldShadow.receiveShadow = true;

    worldGrass = new THREE.Mesh(new THREE.SphereGeometry(worldRadius - .5, 50, 50), new THREE.MeshBasicMaterial({
        color: Colors.black
    }));
    //floor.rotation.x = -Math.PI / 2;
    worldGrass.receiveShadow = false;

    world = new THREE.Group();
    world.position.y = -worldRadius;

    world.add(worldShadow);
    world.add(worldGrass);
    scene.add(world);
}

// function createWorld() {
//     world = new World();
// }