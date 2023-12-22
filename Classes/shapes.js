class Circles {
  constructor(ctx, canvas) {
    this.x = 0;
    this.y = Math.random() * canvas.height;
    this.width = 30;
    this.height = 30;
    this.ctx = ctx;
    this.type = "circle";
    this.img = new Image();
    this.img.src = "/Images/circle.png";
  }
  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  move() {
    this.x += 2;
  }
}

class Squares extends Circles {
  constructor(ctx, canvas) {
    super(ctx, canvas);
    this.type = "square";
    this.img = new Image();
    this.img.src = "/Images/square.png";
  }
  move() {
    this.x += 3;
  }
}

class Triangles extends Circles {
  constructor(ctx, canvas) {
    super(ctx, canvas);
    this.type = "triangle";
    this.img = new Image();
    this.img.src = "/Images/triangle.png";
  }
  move() {
    this.x += 3;
  }
}

export { Circles, Squares, Triangles };
