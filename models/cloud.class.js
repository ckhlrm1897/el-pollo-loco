class Cloud extends MovableObject {
    y = 20;
    x = 0;
    height = 300;
    width = 500;

    /**
 * Create a new cloud.
 *
 * @param {string} image - Path to the cloud image asset.
 * @param {number} x - Base x-position where the cloud starts.
 *                     A random offset (0–220) is added for variation.
 */
    constructor(image, x) {
        super().loadImage(image);
        this.x = x;
        this.x += Math.random() * 220
        this.animate();

    }

    /**
 * Starts the continuous leftward movement of the cloud.
 * Uses a fixed interval (~30 FPS).
 * @returns {void}
 */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 30)

    }
}