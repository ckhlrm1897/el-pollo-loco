class Bottle extends DrawableObject {
    height = 100;
    width = 80;

        /**
     * Collision offset for more accurate hit detection.
     * @type {{top:number, bottom:number, left:number, right:number}}
     */
    offset = {
        top: 20,
        bottom: 40,
        left: 35,
        right: 50,
    }

        /**
     * Create a new Bottle collectible.
     * @param {number} x - Base x-position where the bottle will appear.
     *                     A random value between 0–1000 is added to spread bottles across the level.
     * @param {string} image - Path to the bottle image asset.
     */
    constructor(x, image) {
        super();
        this.loadImage(image);
        this.x = x + 200 + Math.random() * 1000;
        this.y = 330
    }
}
