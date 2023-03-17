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
    this.x += speed; 
    if (this.x > this.width) {
      this.x = 0;
    }
  }
}
 
export default Road;