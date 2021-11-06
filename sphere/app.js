
///                THe HALF  INVERTED CIRCLE             ///



var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 100);
camera.position.set(0, 5, 15);
camera.lookAt(0, 5, 5);
camera.up.set(0,0,1);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const getShpereCoordinateList=()=>{
    
    let coordinates=[]
     //eq of circle x(t) = Rcos(t) and y(t)= Rsin(t) while R is radiius
    //let R=2
 //   x = r cos(t)
//y = r sin(t
    const R =-10;
    for(var j= 0  ; j<=Math.PI; j+=Math.PI/3)
    
    { 
      
        for(var i= 0  ; i<=Math.PI*2; i+=Math.PI/15)
        {
      
            const x = R* Math.sin(j)*Math.cos(i)
            const y = R* Math.sin(j)*Math.sin(i)
           // const z = R* Math.cos(j)
            console.log(x,y)
            coordinates.push(new THREE.Vector2(x, y))

 
        }



 }

  /*for(var i= 0  ; i<=Math.PI*2; i+=Math.PI/16)
    { 
        for(var j= 0  ; j<=Math.PI; j+=Math.PI/16)
        {
      
            const x =   Math.sin(j)*Math.cos(i)
            const y =   Math.sin(j)*Math.sin(i)
            const z =   Math.cos(j)
            console.log(x,y,z)
            coordinates.push(new THREE.Vector3(x, y, z))
 
        }


}*/
 ///coordinates.push(new THREE.Vector3( Math.sin(0)*Math.cos(0),  Math.sin(0)*Math.sin(0), Math.cos(0)))
 console.log(coordinates)
    return coordinates
 
    
}

var geom = new THREE.BufferGeometry().setFromPoints(getShpereCoordinateList());
var matPoints = new THREE.PointsMaterial({size: 0.2, color: "pink"});
var points = new THREE.Points(geom, matPoints);
scene.add(points);

// lines
var matLines = new THREE.LineBasicMaterial({color: "white"});
var lines = new THREE.LineLoop(geom, matLines);
scene.add(lines);
lines.position.y =5;
points.position.y =5;



const animate = function () {
				requestAnimationFrame( animate );

                //points.rotation.x+=0.01
             
               // lines.rotation.x+=0.01
               // points.rotation.y+=0.01
             
                //lines.rotation.y+=0.01

                
                renderer.render( scene, camera );
			};



          

			animate();