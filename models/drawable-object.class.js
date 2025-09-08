class DrawableObject {
    x = 80;
    y = 98;
    img;
    height = 230;
    width = 130;
    imageCache = {};
    currentImage = 0;

    /**
 * Collision offset for accurate hit detection.
 * Values shrink or expand the effective hitbox.
 * @type {{top:number, bottom:number, left:number, right:number}}
 */
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }

    /**
 * Load a single image into this object.
 * @param {string} path - Path to the image file.
 * @returns {void}
 */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
 * Draw the current image of the object to the canvas.
 * @param {CanvasRenderingContext2D} ctx - 2D rendering context of the canvas.
 * @returns {void}
 */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Preload multiple images into the image cache for later use (e.g., animations).
     * @param {string[]} arr - Array of image file paths.
     * @returns {void}
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }
}