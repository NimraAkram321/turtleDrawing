import * as THREE from "/js/three.module.js";
import {OrbitControls} from "/js/OrbitControls.js"; 
import * as TURTLE from "/js/turtle.js";
var main=document.getElementById("main");
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.set(0,5,50).setLength(100);
const renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
main.appendChild(renderer.domElement);
let controls=new OrbitControls(camera,renderer.domElement)

var plane=new THREE.GridHelper(100,10);
scene.add(plane);0
initialize();
animate();
function initialize(){
    var point=new THREE.Vector2(0,0);
    var initAngel=0;
  
    var t = new TURTLE.Turtle(point, initAngel);
  
    t.turn(140)
   t.forward(30,true)
   t.turn(-50)
   t.forward(10,true)
   t.turn(-20)
   t.forward(14,true)
   t.turn(-70)
   t.forward(30,true)
   t.turn(-60)
   t.forward(14,true)
   t.turn(-30)
   t.forward(10,true)
   t.turn(-40)
   t.forward(28,true)
   t.turn(270)
   t.forward(23,true)
   t.turn(-70)
   t.forward(21,true)
   t.turn(60)
   t.forward(12,true)
   t.turn(-130)
   t.forward(30,true)
   t.turn(-130)
   t.forward(12,true)
   t.turn(60)
   t.forward(21,true)
   t.turn(-60)
   t.forward(12,true)
   t.turn(-90)
   t.forward(3,true)
   t.turn(40)
   t.forward(3,true)
   t.turn(50)
   t.forward(4,true)
   t.turn(180)
   t.forward(4,true)
   t.turn(80)
   t.forward(20,true)
   t.turn(-60)
   t.forward(12,true)
   t.turn(-90)
   t.forward(8,true)
   t.turn(40)
   t.forward(8,true)
   t.turn(-90)
   t.forward(12,true)
   t.turn(-45)
   t.forward(17,true)
   t.turn(-65)
   t.forward(3,true)
   t.turn(-50)
   t.forward(3,true)
   t.turn(-130)
   t.forward(6,true)
   t.turn(150)
   t.forward(8,true)
   t.turn(-60)
   t.forward(8,true)
   t.turn(60)
   t.forward(10,true)
   t.turn(170)
   t.forward(11.5,true)
   t.turn(-50)
   t.forward(6,true)
   t.turn(-50)
   t.forward(2,true)
   t.turn(-170)
   t.forward(2,true)
   t.turn(-50)
   t.forward(6,true)
   t.turn(90)
   t.forward(8,true)
   t.turn(-45)
   t.forward(8,true)
   t.turn(-170)
   t.forward(10,true)
   t.turn(35)
   t.forward(5.5,true)
   t.turn(50)
   t.forward(3,true)
   t.turn(170)
   t.forward(3,true)
   t.turn(90)
   t.forward(7,true)
   


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
  
