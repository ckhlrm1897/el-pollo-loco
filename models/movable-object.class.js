class MovableObject extends DrawableObject {


    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    speedX = 0;
    acceleration = 2.5;
    lastHit = 0;
    lastMove = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true
        } else {
            return this.y < 198;
        }

    }

    hit(loseEnergy) {
        this.energy -= loseEnergy;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    };

    isDead() {
        return this.energy == 0;
    }

    isAlive() {
        return this.energy > 0;
    }

    isInIdle() {
        if (!world.keyboard.SPACE && !world.keyboard.D && !world.keyboard.RIGHT && !world.keyboard.LEFT)
            return true;
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    };

    moveRight() {
        this.x += this.speed;

    }

    moveLeft() {
        this.x -= this.speed;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    jump() {
        this.speedY = 25;
    }

    isColliding(mo) {
        return this.x + this.offset.left + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.offset.top + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.offset.left + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.offset.top + mo.height - mo.offset.bottom
    }

    jumpAttack() {
        this.y + this.offset.top + this.height - this.offset.bottom == 415
    }

    enemieDies(enemy) {
        this.energy = 0;
        if (enemy instanceof Chicken || enemy instanceof SmallChicken)
        setTimeout(() => {
            level1.enemies = level1.enemies.filter(e => e !== enemy);
        }, 1000);
    }

    animate(fn, time) {
        let id = setInterval(fn, time);
        intervalIds.push(id);
    }

}

