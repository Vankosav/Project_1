/*class Shapes {
    constructor (ctx, canvas) {
    this.x1 = 0; 
    this.x2 = 0; 
    this.x3 = 0; 
    this.y1 = Math.random() * canvas.height;
    this.y2 = Math.random() * canvas.height;
    this.y3 = Math.random() * canvas.height;
    this.width = 60;
    this.height = 60;
    this.ctx = ctx;
    this.img1 = new Image();// try an array
    this.img1.src = "/Images/circle.png";
    this.img2 = new Image();
    this.img2.src = "/Images/square.png";
    this.img3 = new Image ();
    this.img3.src = "/Images/triangle.png"
    }*/

    class Circles {
        constructor(ctx, canvas) {
          this.x = 0;
          this.y = Math.random() * canvas.height;
          this.width = 50;
          this.height = 50;
          this.ctx = ctx;
          this.type = 'circle';
          this.img = new Image();
          this.img.src = "/Images/circle.png";
        }
        draw() {
          this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
        move() {
          this.x += 3;
        }
      }
      
      class Squares extends Circles {
        constructor(ctx, canvas) {
          super(ctx, canvas);
          this.type = 'square';
          this.img = new Image();
          this.img.src = "/Images/square.png";
        }
        move() {
            this.x += 4;
          }
      }
      
      class Triangles extends Circles {
        constructor(ctx, canvas) {
          super(ctx, canvas);
          this.type = 'triangle';
          this.img = new Image();
          this.img.src = "/Images/triangle.png";
        }
        move() {
            this.x += 2;
          }
      }
      
      export { Circles, Squares, Triangles };
      