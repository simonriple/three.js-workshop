const slides = [
    {title: 'Take your project to the next dimension',points: []},
    {title: 'WebGL', points: [
        'Javascript API for rendering graphics', 
        'GPU proseccing', 
        "Canvas"
    ]},
    {title: 'Three.js', points: [
        "Abstraksjon av WebGL",
        "Reduser boilerplate",
        "Mindre matte"
    ]},
    {title: 'Scene', points: [
        'Dette er en beskrivelse',
        'ble'
    ]},
    {title: 'Renderer', points: ['Viser scenen','Kobler WebGL, Scene og Canvas']},
    {title: 'Camera', points: ['Brukerens point of view','Perspective camera', '     Near', '     Far', '     Fov', '     Aspect', 'OrthographicCamera', 'OrbitControls']},
    {title: 'Light', points: ['Dette er en beskrivelse','Ambient, Direction, Point']},
    {title: 'Object', points: [
        'Geometry',
        'Material'
    ]},
    {title: 'Geometry', points: [
        'The shape of an object',
        'Consists of vertexes',
        'Box, Sphere, Plane, Torus, Cone'
    ]},
    {title: 'Material', points: [
        'The "skin" of an object',
        'Color, shade, texture, reflection',
        'MeshStandardMaterial, MeshPhongMaterial, MeshDepthMaterial, MeshNormalMaterial'
    ]},
    {title: 'Action', points: ['AnimationLoop',]},
    {title: 'Shader', points: ['GLSL','Fragment shader', 'Vertex shader', 'Uniform, Varying, attribute']},
    {title: 'HeightMap', points: ['HeightMap']},
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