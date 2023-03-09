import Road from "./Classes/road.js"

window.onload = () => {
    document.querySelector("button").onclick = () => {
      startGame();
    };


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


let speed = 1;


function startGame(){
    animate()
}

const road = new Road(ctx, canvas);
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  road.draw();
  road.Update(speed);
  requestAnimationFrame(animate);
}
}
