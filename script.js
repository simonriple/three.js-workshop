import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

//Sizes
const sizes = {
    width: window.innerWidth * 0.7,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth*0.7
    sizes.height = window.innerHeight
    
    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    
    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

//Canvas
const canvas = document.querySelector('canvas.webgl')

//Scene 
const scene = new THREE.Scene();

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
});
renderer.setSize(sizes.width, sizes.height);

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// const camera = new THREE.OrthographicCamera()
camera.position.x = 0;
camera.position.y = 1;
camera.position.z = 3;
scene.add(camera);

//Camera controls
const control = new OrbitControls(camera, canvas);
control.autoRotate = true;
control.autoRotateSpeed = .5;

//Light
const light = new THREE.AmbientLight();
scene.add(light);

//Load texture
const loader = new THREE.TextureLoader();
const texture = loader.load('assets/texture.jpg');
const heightMap = loader.load('assets/height.png');
const alphaMap = loader.load('/assets/alpha.jpeg')

//Object
// const geometry = new THREE.SphereGeometry(1);
// const material = new THREE.MeshBasicMaterial({map: texture});
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);


//Plane object
// const vertexShader = `
// uniform float time;
// uniform float frequency;
// uniform float amplitude;
// varying float height;

// void main() {
//     vec3 currentPosition = position;

//     height = sin(frequency * currentPosition.x + time);
    
//     currentPosition.z = height*amplitude;

//     gl_Position = projectionMatrix * modelViewMatrix * vec4(currentPosition, 1.0);
// }
// `;
// const fragmentShader = `
// uniform vec3 maxColor;
// uniform vec3 minColor;
// varying float height;

// void main() {
//     float normalizedHeight = (height+1.0)*0.5;
//     vec3 color = mix(minColor, maxColor, normalizedHeight);
//     gl_FragColor = vec4(color, 1);
// }
// `;

// const planeMaterial = new THREE.ShaderMaterial({
//     uniforms: {
//         time: { type: "f", value: 0 },
//         frequency: { type: "f", value: 10 },
//         amplitude: { type: "f", value: .1 },
//         maxColor: {type: "vec3", value: new THREE.Vector3(1,1,1)},
//         minColor: {type: "vec3", value: new THREE.Vector3(0,0,1)}
//     },
//     vertexShader: vertexShader,
//     fragmentShader: fragmentShader
// });
// const planeGeometry = new THREE.PlaneGeometry(3,3,100,100);
// const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
// planeMesh.rotation.x = -Math.PI/2;
// scene.add(planeMesh);

//Landscape
const landscapeGeometry = new THREE.PlaneGeometry(3,3,64,64);
const landscapeMaterial = new THREE.MeshStandardMaterial({
    wireframe: true,
    color:'white',
    displacementMap: heightMap,
    displacementScale: 0.5,
    alphaMap:alphaMap,
    transparent:true
});
const landscapeMesh = new THREE.Mesh(landscapeGeometry, landscapeMaterial);
landscapeMesh.rotation.x = -Math.PI/2;
scene.add(landscapeMesh);

var clock = new THREE.Clock();

//Action / Animation
function animationLoop() {
    
    const elapsedTime = clock.getElapsedTime();
    //Animation
    // mesh.rotation.y += .01;
    // mesh.position.y = Math.sin(elapsedTime);
    
    //Animate plane
    // planeMaterial.uniforms.time.value = elapsedTime;
    renderer.render(scene, camera);
    
    control.update();
};

renderer.setAnimationLoop(animationLoop)