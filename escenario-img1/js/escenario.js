const scene = new THREE.Scene();

scene.fog = new THREE.Fog( 0xffffff, 7, 3);

var loader = new THREE.TextureLoader();
loader.load('./image/background.jpg', function(texture){
    scene.background = texture
})

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const geometry = new THREE.BoxGeometry( 2.2, 1, 1.2 );
const material = new THREE.MeshBasicMaterial( { color: 0x37396B } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.x = -5;
camera.position.y = -2.8;
camera.position.z = 5;


function animate(){
    requestAnimationFrame(animate);
    cube.rotation.y += 0.02
    cube.rotation.z += 0.003
    renderer.render(scene, camera);
}

animate();
 