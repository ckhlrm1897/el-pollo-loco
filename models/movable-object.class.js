class MovableObject {
    x = 80;
    y = 198;
    img;
    height = 230;
    width = 130;
    imageCache = {};

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * 
     * @param {Array} arr - ['img/image1.png', 'img/image1.png',...]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = path;
        });

    }

    moveRight() {
        console.log('Moving right');

    }

    moveLeft() {

    }
}

