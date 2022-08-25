const scene = new THREE.Scene();

scene.fog = new THREE.Fog( 0xffffff, 6.5, 9);

var loader = new THREE.TextureLoader();
loader.load('./image/background.jpg', function(texture){
    scene.background = texture
})

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const geometry = new THREE.CapsuleGeometry( 0.5, 0.2, 12, 32 );
const material = new THREE.MeshBasicMaterial( {color: 0xbb1ebd} );
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );

camera.position.x = 7;
camera.position.y = 0.05;
camera.position.z = 8;


function animate(){
    requestAnimationFrame(animate);
    capsule.rotation.y += 1
    capsule.rotation.x += 1
    renderer.render(scene, camera);
}

animate();