import Road from "./Classes/road.js"
import Flyer from "./Classes/student.js"
import Shapes from "./Classes/shapes.js";

window.onload = () => {
    document.querySelector("button").onclick = () => {
      startGame();
    };


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const myStudent = new Flyer (ctx);

const myShapes = ['circle', 'square', 'triangle'];
//'circle', 'square', 'triangle'
console.log(myShapes);

let speed = 1;
let counter = 0; 
let score = 0; 
let animationFrame;
// let target = myshapesradom;


function startGame(){
    animate();
    moveStudent();
    
    
}

const road = new Road(ctx, canvas);
function animate() {
    animationFrame = requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  road.draw();
  road.Update(speed);
  myStudent.draw();
  
  if (counter % 50 === 0)  {
    myShapes.push(new Shapes(ctx, canvas));
    console.log('STUDENT: ',myStudent.x, myStudent.y);
    console.log('New Shape:', myShapes[0].y);
  }
  myShapes.forEach((shape) => {
    if (shape instanceof Shapes) {
    shape.draw();
    shape.move();
    }
  
    if (
        // target shape Y
        // if target shape is circle y1 if triangle y2 ....
        //get random instructions for the game: the teacher will have constant message 
    //'Find &{random shape} and avoid all other shapes
    //if (the target shape === circle) {
        //gameOver with all other shapes
    // } and else if (the target shape === square) {
        // gameOver with others 
        // else if (the target shape === triangle) {
            //gameOver with others
        shape.x > myStudent.x &&
        shape.x < myStudent.x + myStudent.width &&
        shape.y1 > myStudent.y &&
        shape.y1 < myStudent.y + myStudent.height
      ) {
        gameOver();
        console.log("collision detected");
      }
    });

counter++;
}
//score-if touch a shape => score++
function moveStudent () {
    document.addEventListener("keydown", (event) => {
        switch (event.code) {
          case "ArrowLeft":
            myStudent.moveLeft();
            break;
          case "ArrowRight":
            myStudent.moveRight();
            break;
          case "ArrowUp":
            myStudent.moveUp();
            break;
          case "ArrowDown":
            myStudent.moveDown();
            break;  
        }
      });
      
    }

    function gameOver() {
        cancelAnimationFrame(animationFrame);
       
        ctx.font = "30px Arial";
        ctx.fillText("Game Over", 10, 50);
        
      }
    } 

    
        