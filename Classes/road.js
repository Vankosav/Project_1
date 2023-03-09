class Road {
  constructor(ctx, canvas) {
    this.x = 0;
    this.y = 0;
    this.image = new Image();
    this.image.src = "../Images/road.png";
    this.ctx = ctx;
    this.width = canvas.width;
    this.height = canvas.height;
  }

  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    this.ctx.drawImage(this.image, this.x, this.y - this.height, this.width, this.height)
  }


  Update(speed) {
    this.y += speed; //The image shifts down when you refresh
    if (this.y > this.height) {
      //If the image has gone over the edge of the canvas, change the position
      console.log('If section');
      this.y = 0; //The new position is indicated with the second background
    }
  }
}
 
export default Road;