class Road {
  constructor(ctx, canvas) {
    this.x = 0;
    this.y = 0;
    this.image = new Image();
    this.image.src = "../Images/back.avif";
    this.ctx = ctx;
    this.width = canvas.width;
    this.height = canvas.height;
  }

  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    this.ctx.drawImage(this.image, this.x - this.width, this.y, this.width, this.height)
  }


  Update(speed) {
    this.x += speed; //The image shifts down when you refresh
    if (this.x > this.width) {
      //If the image has gone over the edge of the canvas, change the position
      
      this.x = 0; //The new position is indicated with the second background
    }
  }
}
 
export default Road;