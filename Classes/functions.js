function moveStudent () {
    document.addEventListener("keydown", (event) => {
        switch (event.code) {
          case "ArrowLeft":
            myStudent.moveLeft();
            break;
          case "ArrowRight":
            myStudent.moveRight();
            break;
          case "ArrowUp":
            myStudent.moveUp();
            break;
          case "ArrowDown":
            myStudent.moveDown();
            break;  
        }
      });
    }

    export default 