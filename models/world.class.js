
class World {
    character = new Character();
    level;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new HealthBar();
    throwableBottles = [];
    coinBar = new CoinBar();
    coins = [];
    bottles = [];
    bottleBar = new BottleBar();
    endbossBar = new HealthBarEndboss();




    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        initLevel();
        this.level = level1;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.checkThrowObjects();
        this.character.energy = 100;
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkCollectingBottles();
            this.checkCollectingCoins();
        }, 1000 / 20);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            this.checkHitByBottle(enemy);
            if (this.character.isColliding(enemy) && this.character.isAboveGround()) {
                let index = this.level.enemies.indexOf(enemy);
                this.level.enemies[index].enemieDies(enemy, index);
            } else if (this.character.isColliding(enemy) && enemy.isAlive()) {
                this.character.hit(5);
                this.statusBar.setPercentage(this.character.energy);
            }
        })
    }

    checkHitByBottle(enemy) {
        this.throwableBottles.forEach((bottle) => {
            if (enemy.isColliding(bottle)) {
                let index = this.level.enemies.indexOf(enemy);
                let hittenEnemy = this.level.enemies[index];
                hittenEnemy.energy -= 20;
                this.enemyHitOrDie(hittenEnemy, index, bottle);
            }
        })
    }

    checkCollectingBottles() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.getObject(bottle);
            }
        })
    }

    checkCollectingCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.getObject(coin);
            }
        })
    }

    checkThrowObjects() {
        setInterval(() => {
            if (this.keyboard.D) {
                this.throwBottle();
            }
        }, 1000 / 10);
    }



    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backGroundLayers);
        this.addObjectsToMap(this.level.clouds);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.endbossBar);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);

        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableBottles);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);

        this.ctx.translate(-this.camera_x, 0);
        this.ctx.font = "40px Rye-Regular";
        this.ctx.fillText(this.coinBar.quantity, 60, 85);
        this.ctx.fillText(this.bottleBar.quantity, 60, 125);


        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        // mo.drawOuterFrame(this.ctx);
        // mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    getObject(object) {
        let type = object.constructor.name.toLowerCase();
        let plural = type + "s";
        let barName = type + "Bar";
        let index = this.level[plural].indexOf(object);
        this.level[plural].splice(index, 1)
        this[plural].push(object);
        this[barName].quantity++;
    }

    throwBottle() {
        if (this.bottles.length > "") {
            let bottle = new ThrowableObject(this.character.x, this.character.y);
            this.throwableBottles.push(bottle);
            this.bottles.pop();
            this.bottleBar.quantity--;
        }
    }

    enemyHitOrDie(hittenEnemy, index, bottle) {
        if (hittenEnemy instanceof Endboss) {
            this.endbossBar.setPercentage(hittenEnemy.energy);
            hittenEnemy.hit(0);
        }
        if (hittenEnemy.energy == 0) {
            hittenEnemy.enemieDies(hittenEnemy, index);
        }
        bottle.energy = 0;
        setTimeout(() => {
            this.throwableBottles.pop();
        }, 1000 / 50);
    }
}