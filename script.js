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
camera.position.y = 1;
camera.position.z = 3;
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


//Plane object
const vertexShader = `
uniform float time;
uniform float frequency;
uniform float amplitude;
varying float height;

void main() {
    vec3 currentPosition = position;

    height = sin(frequency * currentPosition.x + time);
    
    currentPosition.z = height*amplitude;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(currentPosition, 1.0);
}
`;
const fragmentShader = `
uniform vec3 maxColor;
uniform vec3 minColor;
varying float height;

void main() {
    float normalizedHeight = (height+1.0)*0.5;
    vec3 color = mix(minColor, maxColor, normalizedHeight);
    gl_FragColor = vec4(color, 1);
}
`;

const planeMaterial = new THREE.ShaderMaterial({
    uniforms: {
        time: { type: "f", value: 0 },
        frequency: { type: "f", value: 10 },
        amplitude: { type: "f", value: .1 },
        maxColor: {type: "vec3", value: new THREE.Vector3(1,1,1)},
        minColor: {type: "vec3", value: new THREE.Vector3(0,0,1)}
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader
});
const planeGeometry = new THREE.PlaneGeometry(3,3,100,100);
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
planeMesh.rotation.x = -Math.PI/2;
scene.add(planeMesh);

var clock = new THREE.Clock();

//Action / Animation
function tick() {

    const elapsedTime = clock.getElapsedTime();
    //Animation
    mesh.rotation.y += .01;
    mesh.position.y = Math.sin(elapsedTime);

    //Animate plane
    planeMaterial.uniforms.time.value = elapsedTime;
    
    control.update();
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
};

tick();