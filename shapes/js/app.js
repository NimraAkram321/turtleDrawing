import * as THREE from "/js/three.module.js";
import {OrbitControls} from "/js/OrbitControls.js"; 
import * as TURTLE from "/js/turtle.js";
// Get the HTML component first (by specific Id) in which you want to render your world
var main = document.getElementById("main");

// Create your scene
const scene = new THREE.Scene();

// Choose/Create and set your camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 50).setLength(100);

// Create the renderer which will draw your world on web browser
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// Pass the renderer to the HTML component of your app you have chossen earlier
main.appendChild(renderer.domElement);

// This will create imaginary oorbits around your world.
// Orbit controls allow the camera to orbit around a target.
let controls = new OrbitControls(camera, renderer.domElement)

// this grid helper will help you in alligning your objects
//you can remove this peice of code after your are done with designing your world
var plane = new THREE.GridHelper(100, 10);
scene.add(plane); 0

// WOW! now you are done with all necessary setup

// This initialize function will initialize all your objects to your world
// All of your objects are created in the definition part of your init function
initialize();
// This animate fuction will recall itself on every next frame and
// it is supposed responsible to show every animation in your world.
animate();

// Now dive into your world and start creating creating your awesome world
// Declare all the object variables here first

//var cube;

// Now initialize above objects in the function below
function initialize() {
 

  var point = new THREE.Vector2(0, 0);
  var initAngle = 0;
  var t = new TURTLE.Turtle(point, initAngle);
  var p= new THREE.Vector2(0,0)
  var theta=(2.0*3.14159)/5;
  var radius=12;
  for(var c=0;c<14;c++){
         p.set(radius*Math.sin(theta*c),radius*Math.cos(theta*c));
         for(var i=0;i<10; i++){
            for(var j=0;j<10;j++){
              t.turn(20);
              t.forward(i, true);
            }
          
          
          
        }
  }
 
 
// t.turn(90);
  //  t.forward(10, true);
    //t.turn(90);
  /*t.turn(90);
  t.forward(10, true);
  t.turn(-135);// 90-135=-45
  t.forward(10, true);
  t.turn(135); // -45+135=90
  t.forward(10, true);
  t.turn(150); // 90+145=
  t.forward(15, true);
  t.turn(140); // 90+145=
  t.forward(8, true);
  t.turn(115);// 90-135=-45
  t.forward(10, true);
  t.turn(248);// 90-135=-45
  t.forward(8, true);
  t.turn(218);// 90-135=-45
  t.forward(26, true);
  
  */
  scene.add(t.drawTurtle());
  console.log(t);
  console.log(t.drawTurtle())

}

// Specify all animation effect in the animation function you are seeing below
function animate() {
  requestAnimationFrame(animate);
 
  render();
}

function render() {
  renderer.render(scene, camera);
}
