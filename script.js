import Road from "./Classes/road.js"
import Flyer from "./Classes/student.js"
import Shapes from "./Classes/shapes.js";
window.onload = () => {
    document.querySelector("button").onclick = () => {
      startGame();
    };
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const scoreElement = document.getElementById("score");

const myStudent = new Flyer (ctx);
const myShapes = ['circle', 'square', 'triangle'];

//'circle', 'square', 'triangle'
console.log(myShapes);
const road = new Road(ctx, canvas);

let speed = 1;
let counter = 0; 
let score = 0; 

let animationFrame;

function startGame(){
  play();
  moveStudent();
}

function play() {
  animationFrame = requestAnimationFrame(play);
ctx.clearRect(0, 0, canvas.width, canvas.height);
road.draw();
road.Update(speed);
myStudent.draw();

  if (counter % 70 === 0)  {
    // change the target shape
    myShapes.push(new Shapes(ctx, canvas));
    console.log('STUDENT: ',myStudent.x, myStudent.y);
    console.log('New Shape:', myShapes[0].y);
  }
  myShapes.forEach((shape, index) => {
    if (shape instanceof Shapes) {
      shape.draw();
      shape.move();
  
      // Check if the student collects a circle
      if (shape.img1.src.includes('circle') &&
          shape.x > myStudent.x &&
          shape.x < myStudent.x + myStudent.width &&
          shape.y1 > myStudent.y &&
          shape.y1 < myStudent.y + myStudent.height) {
        score++;
        myShapes.splice(index, 1); // remove the collected circle from the shapes array
        scoreElement.textContent = `Score: ${score}`;
      }
  
      // Check if the student collides with a square or triangle
      if ((shape.img2.src.includes('square') || shape.img3.src.includes('triangle')) &&
      ((shape.x > myStudent.x &&
        shape.x < myStudent.x + myStudent.width &&
        shape.y2 > myStudent.y &&
        shape.y2 < myStudent.y + myStudent.height) ||
       (shape.x > myStudent.x &&
        shape.x < myStudent.x + myStudent.width &&
        shape.y3 > myStudent.y &&
        shape.y3 < myStudent.y + myStudent.height)))
  {
    gameOver();
    console.log("collision detected");
  }
  
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



