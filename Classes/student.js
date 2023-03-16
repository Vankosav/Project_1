class Flyer {
    constructor (ctx) {
    this.x = 700;
    this.y = 550;
    this.width = 100;
    this.height = 120;
    this.img = new Image ();
    this.img.src = "/Images/char.png";
    this.ctx = ctx; 
    }

    draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    moveLeft() {
    this.x -= 10;
    };

    moveRight() {
    this.x += 10;
    }

    moveUp() {
    this.y -= 10;
    }

    moveDown() {
    this.y += 10; 
    }
}

export default Flyer;