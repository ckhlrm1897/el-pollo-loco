class Coin extends MovableObject {

    height = 100;
    width = 80;

    /**
 * Collision offset for accurate hit detection.
 * @type {{top:number, bottom:number, left:number, right:number}}
 */
    offset = {
        top: 30,
        bottom: 60,
        left: 20,
        right: 35,
    }

    COIN_IMAGES = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ]

    /**
     * Create a new Coin collectible.
     *
     * @param {number} x - Base x-position where the coin spawns.
     *                     A random offset (0–1000) is added for variation.
     * @param {number} y - Base y-position where the coin spawns.
     *                     Slightly randomized and scaled (×0.9).
     */
    constructor(x, y) {
        super().loadImage(this.COIN_IMAGES[0])
        this.x = x + Math.random() * 1000;
        this.y = (y + Math.random()) * 0.9;
        this.loadImages(this.COIN_IMAGES);
        this.animate(this.playCoinAnimation, 1000 / 3);
    }

    /**
 * Plays the coin’s two-frame animation in a loop.
 * @returns {void}
 */
    playCoinAnimation = () => {
        this.playAnimation(this.COIN_IMAGES)
    }
}