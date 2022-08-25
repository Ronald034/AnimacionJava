const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const geometry = new THREE.ConeGeometry( 1.5, 4.5, 8.5 );
const material = new THREE.MeshBasicMaterial( {color: 0xc8e5eb} );
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );


camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 10;


function animate(){
    requestAnimationFrame(animate);
    cone.rotation.y += 0.05
    renderer.render(scene, camera);
}

animate();