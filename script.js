window.onload = () => {
    document.querySelector("button").onclick = () => {
      startGame();
    };


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image(); 
img.src = "./Images/road.png"; 
 

let x = 0;
let y = 0;

// Set the speed and direction of the image
let speed = 5;
let direction = 1; // 1 for down, -1 for up

// Define the animation loop function
function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update the position of the image
  y += speed * direction;

  // Reverse direction if the image hits the top or bottom edge of the canvas
  if (y + img.height > canvas.height) {
    direction = -direction;
  }
  ctx.drawImage(img, x, y, 900, 700);

  // Request the next animation frame
  requestAnimationFrame(animate);
}

// Start the animation
animate();
}