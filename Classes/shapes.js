class Shapes {
    constructor (ctx, canvas) {
    this.x = 0; 
    this.y1 = Math.random() * canvas.height;
    this.y2 = Math.random() * canvas.height;
    this.y3 = Math.random() * canvas.height;
    this.width = 40;
    this.height = 40;
    this.ctx = ctx;
    this.img1 = new Image();// try an array
    this.img1.src = "/Images/circle.png";
    this.img2 = new Image();
    this.img2.src = "/Images/square.png";
    this.img3 = new Image ();
    this.img3.src = "/Images/triangle.png"
    }
    

   draw () {
    this.ctx.drawImage(this.img1, this.x, this.y1, this.width, this.height); 
    this.ctx.drawImage(this.img2, this.x, this.y2, this.width, this.height);
    this.ctx.drawImage(this.img3, this.x, this.y3, this.width, this.height);  
}

   move () {
    this.x += 3;
   }
}
export default Shapes;