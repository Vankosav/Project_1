import Road from "./Classes/road.js"
import Flyer from "./Classes/student.js"
import { Circles, Squares, Triangles } from "./Classes/shapes.js";

window.onload = () => {
  document.getElementById('start').onclick = () => {
    console.log('start button is clicked');
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
  let isButtonPressed = false;
  

  const speechButton = document.getElementById("speech-button");
  const textSpeech = document.getElementById("instructions");
  const textSpeechSay = textSpeech.innerText;
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = textSpeechSay;
  
  
  function speakInstructions() {
    if (isButtonPressed) {
      const utterance = new SpeechSynthesisUtterance(textSpeechSay);
      window.speechSynthesis.speak(utterance);
    }
  }

speechButton.addEventListener("click", function() {
  isButtonPressed = true;
  speakInstructions();
});

let myAudio = new Audio ('./Music/backgroundmusic.mp3');
let sEffect = new Audio ('/Music/soundeffect.wav');

  function startGame(){
    play();
    moveStudent();
    myAudio.play();
  }

  function play() {
    animationFrame = requestAnimationFrame(play);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    road.draw();
    road.Update(speed);
    myStudent.draw();

    if (counter % 90 === 0)  {
      circle.push(new Circles(ctx, canvas));
    }
    if (counter % 95 === 0)  {
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
        sEffect.play();
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'orange';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgb(96, 96, 228)';
    ctx.font = "80px Arial";
    ctx.fillText("Game Over", 280, 330);
    onpause();
  }
  
  }

