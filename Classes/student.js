class Flyer {
    constructor (ctx) {
    this.x = 700;
    this.y = 550;
    this.width = 150;
    this.height = 150;
    this.img = new Image ();
    this.img.src = "/Images/char.png";
    this.ctx = ctx;
    }

    draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    moveLeft() {
    this.x -= 8;
    };

    moveRight() {
    this.x += 8;
    }

    moveUp() {
    this.y -= 8;
    }

    moveDown() {
    this.y += 8; 
    }
}

export default Flyer;