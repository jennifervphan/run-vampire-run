function createScene() {
    height = window.innerHeight;
    width = window.innerWidth;
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(Colors.black, 100, 950);
    aspectRatio = width / height;
    fieldOfView = 60;
    nearPlane = 1;
    farPlane = 10000;
    camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
    camera.position.x = 0;
    camera.position.y = 100;
    camera.position.z = 200;
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
}
var render = function() {
    requestAnimationFrame(render);
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

World = function() {
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
    world.position.y = -100;

    world.add(worldShadow);
    world.add(worldGrass);
    scene.add(world);

    // var geometry = new THREE.CylinderGeometry(600, 600, 800, 40, 10);
    // geometry.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
    // var material = new THREE.MeshPhongMaterial({
    //     color: Colors.darkGrey,
    //     transparent: true,
    //     opacity: .6,
    //     shading: THREE.FlatShading,
    // });
    // this.mesh = new THREE.Mesh(geometry, material)
    // this.mesh.receiveShadown = true;
}

function createWorld() {
    world = new World();
}