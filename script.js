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

const myShapes = [];
console.log(myShapes);

//const shapesArray = myShapes.getShapes();

let speed = 1;
let counter = 0; 



function startGame(){
    animate();
    moveStudent();
    getShapes();
}

const road = new Road(ctx, canvas);
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  road.draw();
  road.Update(speed);
  requestAnimationFrame(animate);
  myStudent.draw();
  
  if (counter % 50 === 0)  {
    myShapes.push(new Shapes(ctx, canvas))
  }
  myShapes.forEach((shape) => {
    shape.draw();
    shape.move();
});
counter++;
}

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
}