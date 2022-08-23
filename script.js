import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";


//Canvas
const canvas = document.querySelector('canvas.webgl')


//Scene 
const scene = new THREE.Scene();

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 2;
scene.add(camera);

//Camera controls
const control = new OrbitControls(camera, canvas);

//Light
const light = new THREE.AmbientLight();
scene.add(light);


//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
});
renderer.setSize(sizes.width, sizes.height);



//Load texture
const loader = new THREE.TextureLoader();
const texture = loader.load('assets/texture.jpg');

//Object
const geometry = new THREE.SphereGeometry(1);
const material = new THREE.MeshBasicMaterial({map: texture});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);


//Action / Animation
function tick() {
    requestAnimationFrame(tick);
    control.update();
    renderer.render(scene, camera);
};

tick();