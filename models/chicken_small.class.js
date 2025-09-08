class SmallChicken extends MovableObject {
    y = 355;
    height = 70;
    width = 70;
    energy = 20;

    /**
* Collision offset to adjust hitbox for more accurate detection.
* @type {{top:number, bottom:number, left:number, right:number}}
*/
    offset = {
        top: 5,
        bottom: 15,
        left: 5,
        right: 10,
    }

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
    ]

    IMAGE_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ]

    /**
 * Create a new Chicken enemy.
 * Loads default image, walking and dead sprites, sets random spawn position and speed,
 * and starts animation/movement loops.
 *
 * @param {number} x - Base x-position where the chicken spawns.
 *                     A random offset (200–700) is added for variation.
 */
    constructor(x) {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGE_DEAD);
        this.x = x + 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 1.5;
        this.animate(this.chickenAnimations, 1000 / 20);
        this.animate(this.chickenMovements, 1000 / 60);
    }


}