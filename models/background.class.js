class BackgroundLayer extends MovableObject {
    x=0;
    y=0;
    width = 720;
    height = 480;
    
        /**
     * Create a new background layer.
     *
     * @param {string} imagePath - Path to the background image.
     * @param {number} x - Horizontal position where this layer should be drawn.
     */
    constructor(imagePath, x) {
        super();
        this.loadImage(imagePath);
        this.x = x;
    }
}