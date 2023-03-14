import Road from "./Classes/road.js"
import Flyer from "./Classes/student.js"
import { Circles, Squares, Triangles } from "./Classes/shapes.js";

window.onload = () => {
  document.querySelector("button").onclick = () => {
    if(!gameStart){
      startGame();
      gameStart = true;
    }
  };

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const scoreElement = document.getElementById("score");

  const myStudent = new Flyer (ctx);
  const circle = [];
  const square = [];
  const triangle = [];

  const road = new Road(ctx, canvas);

  let speed = 1;
  let counter = 0; 
  let gameStart = false;
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

    if (counter % 33 === 0)  {
      circle.push(new Circles(ctx, canvas));
    }
    if (counter % 66 === 0)  {
      square.push(new Squares(ctx, canvas));
    }
    if (counter % 100 === 0)  {
      triangle.push(new Triangles(ctx, canvas));
    }

    circle.forEach((shape, index) => {
      shape.draw();
      shape.move();

      if (shape.type === 'circle' &&
          shape.x > myStudent.x &&
          shape.x < myStudent.x + myStudent.width &&
          shape.y > myStudent.y &&
          shape.y < myStudent.y + myStudent.height) {
        score++;
        circle.splice(index, 1); // remove the collected circle from the shapes array
        scoreElement.textContent = `Score: ${score}`;
      }
    });

    square.forEach((shape) => {
      shape.draw();
      shape.move();

      if (shape.type === 'square' &&
          shape.x > myStudent.x &&
          shape.x < myStudent.x + myStudent.width &&
          shape.y > myStudent.y &&
          shape.y < myStudent.y + myStudent.height) {
        gameOver();
      }
    });

    triangle.forEach((shape) => {
      shape.draw();
      shape.move();

      if (shape.type === 'triangle' &&
          shape.x > myStudent.x &&
          shape.x < myStudent.x + myStudent.width &&
          shape.y > myStudent.y &&
          shape.y < myStudent.y + myStudent.height) {
        gameOver();
      }
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

  function gameOver() {
      cancelAnimationFrame(animationFrame);
      ctx.font = "30px Arial";
      ctx.fillText("Game Over", 10, 50);
    }
  
  }

