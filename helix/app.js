
/*             Add 3D helix to your scene with radius = last digit of seat/nic number
Constant b= 2nd last digit of seat/nic number                        */



var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 100);
camera.position.set(0, 5, 25);
camera.lookAt(0, 5, 5);
camera.up.set(0,0,1);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const getCircleCoordinateList=()=>{
    let coordinates=[]
     //eq of circle x(t) = Rcos(t) and y(t)= Rsin(t) while R is radiius
   
    const R =0.9
    const c=0.8
    for(var i= 0  ; i<Math.PI*10; i+=Math.PI/20)
    { 
        const x = R*Math.cos(i)
        const y = R*Math.sin(i)
        const z = R*c*i
        coordinates.push(new THREE.Vector3(x, y, z))
    }
    return coordinates
    //console.log(coordinates)
    
}
var geom = new THREE.BufferGeometry().setFromPoints(getCircleCoordinateList());
var matPoints = new THREE.PointsMaterial({size: 0.2, color: "green"});
var points = new THREE.Points(geom, matPoints);
scene.add(points);
points.position.y =5;
const animate = function () {
    requestAnimationFrame( animate );

    points.rotation.x+=0.01
 
    //lines.rotation.x+=0.01

    points.rotation.y+=0.01
 
 //lines.rotation.y+=0.01
    
    renderer.render( scene, camera );
};





animate();