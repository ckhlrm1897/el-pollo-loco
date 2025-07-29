class MovableObject {
    x = 80;
    y = 198;
    img;
    height = 230;
    width = 130;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving right');

    }

    moveLeft() {

    }
}

