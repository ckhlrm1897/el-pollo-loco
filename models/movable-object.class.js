class MovableObject extends DrawableObject {


    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    speedX = 0;
    acceleration = 2.5;
    lastHit = 0;
    lastMove = 0;
    i;

    /**
 * Apply gravity continuously.
 * Decreases `speedY` until object lands on ground.
 * Runs ~25 FPS.
 * @returns {void}
 */

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)
    }

    /**
 * Check whether object is above the ground plane.
 * Throwable objects are always considered above ground.
 * @returns {boolean}
 */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true
        } else {
            return this.y < 198;
        }
    }

    /**
 * Reduce object energy when hit and mark last hit time.
 * @param {number} loseEnergy - Amount of energy to subtract.
 * @returns {void}
 */
    hit(loseEnergy) {
        this.energy -= loseEnergy;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    };

    /**
 * Check if object is dead.
 * @returns {boolean}
 */
    isDead() {
        return this.energy == 0;
    }

    /**
 * Check if object is alive.
 * @returns {boolean}
 */
    isAlive() {
        return this.energy > 0;
    }

    /**
 * Check if object is idle (no movement/jump/throw input).
 * @returns {boolean}
 */
    isIdle() {
        if (!world.keyboard.SPACE && !world.keyboard.D && !world.keyboard.RIGHT && !world.keyboard.LEFT)
            return true;
    }

    /**
 * Check if object is currently hurt (within 1 second of last hit).
 * @returns {boolean}
 */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    };

    /**
 * Move object to the right.
 * @returns {void}
 */
    moveRight() {
        this.x += this.speed;

    }

    /**
 * Move object to the left.
 * @returns {void}
 */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
 * Play looping animation from cached images.
 * @param {string[]} images - Array of image paths.
 * @returns {void}
 */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Play animation sequence once (non-looping).
     * Advances frame index until end of list.
     * @param {string[]} images - Array of image paths.
     * @returns {void}
     */
    playAnimationOnce(images) {
        if (this.i < images.length) {
            let path = images[this.i];
            this.img = this.imageCache[path];
            this.i++
        } else {
            let path = images[images.length];
            this.img = this.imageCache[path];
            this.i = images.length + 1;
        }
    }

    /**
 * Check if this object collides with another by comparing hitboxes.
 * @param {MovableObject} mo - Another movable object.
 * @returns {boolean}
 */
    isColliding(mo) {
        return this.x + this.offset.left + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.offset.top + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.offset.left + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.offset.top + mo.height - mo.offset.bottom
    }

    /**
 * Placeholder jump-attack collision check.
 * Currently unused (compares bottom position to 415).
 * @returns {boolean|undefined}
 */
    jumpAttack() {
        this.y + this.offset.top + this.height - this.offset.bottom == 415
    }

    /**
 * Kill an enemy by setting its energy to 0.
 * If Chicken or SmallChicken, remove it from the level after a short delay.
 * @param {MovableObject} enemy - The enemy to remove.
 * @returns {void}
 */
    enemieDies(enemy) {
        this.energy = 0;
        if (enemy instanceof Chicken || enemy instanceof SmallChicken)
            setTimeout(() => {
                level1.enemies = level1.enemies.filter(e => e !== enemy);
            }, 1000);
    }

    /**
 * Register a repeated function call (animation/movement loop).
 * Stores the interval ID in the global intervalIds array.
 * @param {Function} fn - Function to run periodically.
 * @param {number} time - Interval in milliseconds.
 * @returns {void}
 */
    animate(fn, time) {
        let id = setInterval(fn, time);
        intervalIds.push(id);
    }

    /**
     * Handles chicken animation depending on its state.
     * Plays walking animation when alive, dead sprite when killed.
     * @returns {void}
     */
    chickenAnimations = () => {
        if (this.isAlive()) {
            this.playAnimation(this.IMAGES_WALKING);
        } else if (this.isDead()) {
            this.playAnimation(this.IMAGE_DEAD);
            this.speed = 0;
        }
    }

    /**
     * Handles continuous chicken movement (always moves left).
     * Runs at ~60 FPS.
     * @returns {void}
     */
    chickenMovements = () => {
        this.moveLeft();
    }
}

