const slides = [
    {title: 'Take your project to the next dimension',points: []},
    {title: 'WebGL', points: [
        'Javascript API for grafikk rendering', 
        'Hardware akselerert', 
        "WebGL vs OpenGL"
    ]},
    {title: 'Three.js', points: [
        "Abstraksjon av WebGL",
        "Reduserer boilerplate",
        "Mindre matte"
    ]},
    {title: 'Scene', points: [
        'Rommet',
    ]},
    {title: 'Renderer', points: [
        'Kobler scene og canvas',
        'WebGLRenderer'
    ]},
    {title: 'Camera', points: [
        'Brukerens point of view',
        'Perspective camera', 
        '     Near', 
        '     Far', 
        '     Fov', 
        '     Aspect', 
        'OrthographicCamera', 
        'OrbitControls'
    ]},
    {title: 'Light', points: [
        'ThreeJS.Light',
        'Farge og intensitet',
        'Ambient, Direction, Point, Spot']
    },
    {title: 'Object', points: [
        'Geometry',
        'Material'
    ]},
    {title: 'Geometry', points: [
        'Formen',
        'Består av vertexer',
        'Box, Sphere, Plane, Torus, Cone'
    ]},
    {title: 'Material', points: [
        'Huden',
        'Farge, Texture, Refleksjon, Skygge',
        'MeshStandardMaterial',
        'MeshPhongMaterial',
        'MeshDepthMaterial', 
        'MeshNormalMaterial'
    ]},
    {title: 'Animasjon', points: [
        'AnimationLoop', 
        'Endre egenskaper for objekter',
        'Flytte', 
        'Rotere'
    ]},
    {title: 'Shader', points: [
        'GLSL',
        'Fragment shader', 
        'Vertex shader', 
        'Uniform, Varying, Attribute'
    ]},
    {title: 'Map', points: [
        'DisplacementMap', 
        'AlphaMap', 
        'Interaktiv mus', 
        'Tekst', 
        'Window resize'
    ]},
    {title: 'Inspo', points: []}
]

const addPoints = (index, container) => {
    container.innerHTML = ''
 slides[index].points.forEach(point => {
    const li = document.createElement('li')
    li.innerHTML = point
    container.appendChild(li)
 })
}
window.onload = () => {
    let slideIndex = localStorage.getItem('slideIndex') ?? 0
    const container = document.getElementById('container')
    
    const title = document.createElement('h1')
    title.id = 'title'
    title.style = slides[slideIndex].style
    container.appendChild(title)
    const pointContainer = document.createElement('ul')
    pointContainer.id = 'points'
    container.appendChild(pointContainer)

    title.innerHTML = slides[slideIndex].title
    addPoints(slideIndex,pointContainer)
    
    document.addEventListener('keydown',function(e){
        console.log(e)
        if(e.code === 'Space' || e.code === 'ArrowRight') {
            slideIndex = (slideIndex+ 1) % slides.length 
        }else if(e.code === 'ArrowLeft'){
            slideIndex = (slideIndex+ (slides.length-1)) % slides.length 
        }
        localStorage.setItem('slideIndex', slideIndex)
        
        title.innerHTML = slides[slideIndex].title
        title.style = slides[slideIndex].style
        addPoints(slideIndex,pointContainer)
        
    })
}