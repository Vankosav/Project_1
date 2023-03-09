class Road {
  constructor(image, y, ctx) {
    this.x = 0;
    this.y = y;
    this.image = new Image();
    this.image.src = image;
    this.ctx = ctx;
  }

  draw() {
    this.ctx.drawImage(this.image, this.x, this.y)
  }


  Update(road) {
    this.y += speed; //The image shifts down when you refresh

    if (this.y > canvas.height) {
      //If the image has gone over the edge of the canvas, change the position
      this.y = road.y - this.image.height + speed; //The new position is indicated with the second background
    }
  }
}
 
export default Road;