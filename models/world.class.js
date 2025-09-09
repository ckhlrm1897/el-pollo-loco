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
    playGame = true;
    isBottleAboveGround = false;

    /**
 * Create a new game world and start the core loops.
 * @param {HTMLCanvasElement} canvas - Target canvas to render on.
 * @param {{LEFT?:boolean,RIGHT?:boolean,SPACE?:boolean,D?:boolean}} keyboard - Shared keyboard state.
 */

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        initLevel();
        this.level = level1;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run(this.checkCollisions, 1000 / 70);
        this.run(this.checkCollectingBottles, 1000 / 20);
        this.run(this.checkCollectingCoins, 1000 / 20);
        this.checkThrowObjects();
        this.character.energy = 100;
    }

    /**
     * Inject back-reference so the character can access the world.
     * @returns {void}
     */
    setWorld() {
        this.character.world = this;
    }

    /**
 * Register a repeated task (stores id in global intervalIds).
 * @param {Function} fn - Function to run periodically.
 * @param {number} time - Interval in ms.
 * @returns {void}
 */
    run(fn, time) {
        let id = setInterval(fn, time);
        intervalIds.push(id);
    }

    /**
 * Collision handling between character and enemies (incl. boss & stomp kills).
 * Arrow fn to preserve `this`.
 * @returns {void}
 */
    checkCollisions = () => {
        this.level.enemies.forEach((enemy) => {
            this.checkHitByBottle(enemy);
            if (this.character.isColliding(enemy) && enemy instanceof Endboss) {
                this.chracterDies();
            } else if (this.character.isColliding(enemy) && this.character.isAboveGround()) {
                this.chickenDies(enemy);
            } else if (this.character.isColliding(enemy) && enemy.isAlive()) {
                this.characterHitted();
                this.level.enemies.i = 0;
            }
        })
    }

    /**
 * Apply heavy damage when colliding with the Endboss.
 * @returns {void}
 */
    chracterDies() {
        this.character.hit(100);
        this.statusBar.setPercentage(this.character.energy);
    }

    /**
 * Kill a regular chicken via stomp and play sound.
 * @param {MovableObject} enemy
 * @returns {void}
 */
    chickenDies(enemy) {
        chicken_sound.play();
        let index = this.level.enemies.indexOf(enemy);
        this.level.enemies[index].enemieDies(enemy, index);
    }

    /**
 * Handle character being hit by a live enemy.
 * @returns {void}
 */
    characterHitted() {
        autsch_sound.play();
        this.character.hit(5);
        this.statusBar.setPercentage(this.character.energy);
    }

    /**
     * Handle thrown-bottle hits on an enemy; reduces enemy energy and resolves death/hit.
     * @param {MovableObject} enemy
     * @returns {void}
     */
    checkHitByBottle(enemy) {
        this.throwableBottles.forEach((bottle) => {
            if (enemy.isColliding(bottle) && bottle.energy > 0) {
                let index = this.level.enemies.indexOf(enemy);
                let hittenEnemy = this.level.enemies[index];
                hittenEnemy.energy -= 20;
                this.enemyHitOrDie(hittenEnemy, index, bottle);
                punch_sound.play();
            } else if(bottle.y > 300) {
                bottle.energy = 0;
                setTimeout(() => {
                    this.throwableBottles.pop();
                }, 1000/2);
            }
        })
    }

    /**
 * Detect and collect bottles on overlap.
 * @returns {void}
 */
    checkCollectingBottles = () => {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                pick_up_bottle_sound.play();
                this.getObject(bottle);
            }
        })
    }

    /**
 * Detect and collect coins on overlap.
 * @returns {void}
 */
    checkCollectingCoins = () => {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                get_coin_sound.play();
                this.getObject(coin);
            }
        })
    }

    /**
 * Poll for throw input (D) with simple airborne cooldown.
 * @returns {void}
 */
    checkThrowObjects() {
        setInterval(() => {
            if (this.keyboard.D && !this.isBottleAboveGround) {
                this.throwBottle();
            }
        }, 1000 / 10);
    }

    /**
 * Main render loop: clears canvas, draws background, UI bars, player & level objects,
 * and re-queues itself with requestAnimationFrame while `playGame` is true.
 * @returns {void}
 */
    draw() {
        this.drawCanvasAndBackground();
        if (this.playGame) {
            this.drawBars();
            this.addToMap(this.character);
            this.drawLevelObjects();
            this.addObjectsToMap(this.throwableBottles);
            this.ctx.translate(-this.camera_x, 0);
            this.drawQuantities();
            let self = this;
            requestAnimationFrame(function () {
                self.draw();
            });
        }
    }

    /**
 * Clear canvas, apply camera transform, and render background layers/clouds.
 * @returns {void}
 */
    drawCanvasAndBackground() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backGroundLayers);
        this.addObjectsToMap(this.level.clouds);
    }

    /**
 * Draw all status bars (camera independent).
 * @returns {void}
 */
    drawBars() {
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.endbossBar);
        this.ctx.translate(this.camera_x, 0);
    }

    /**
 * Draw numeric quantities for coins/bottles on the HUD.
 * @returns {void}
 */
    drawQuantities() {
        this.ctx.font = "40px Rye-Regular";
        this.ctx.fillText(this.coinBar.quantity, 60, 85);
        this.ctx.fillText(this.bottleBar.quantity, 60, 125);
    }

    /**
     * Draw level collectables and enemies (camera dependent).
     * @returns {void}
     */
    drawLevelObjects() {
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.enemies);
    }

    /**
 * Add an array of drawables to the map in order.
 * @param {Array<DrawableObject>} objects
 * @returns {void}
 */
    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    /**
 * Draw a single object, flipping horizontally when `otherDirection` is set.
 * @param {DrawableObject & {otherDirection?:boolean}} mo
 * @returns {void}
 */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    /**
 * Apply a horizontal mirror transform for rendering.
 * @param {DrawableObject} mo
 * @returns {void}
 */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
     * Revert the horizontal mirror transform and restore canvas state.
     * @param {DrawableObject} mo
     * @returns {void}
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    /**
 * Generic collector: moves the object from level list to inventory list and
 * increments the matching bar quantity (e.g., "bottle" → bottles/bottleBar).
 * @param {DrawableObject} object
 * @returns {void}
 */
    getObject(object) {
        let type = object.constructor.name.toLowerCase();
        let plural = type + "s";
        let barName = type + "Bar";
        let index = this.level[plural].indexOf(object);
        this.level[plural].splice(index, 1)
        this[plural].push(object);
        this[barName].quantity++;
    }

    /**
 * Spawn and throw a bottle if inventory has any; starts a short airborne cooldown.
 * @returns {void}
 */
     throwBottle() {
        if (this.bottles.length > "") {
            throw_sound.play();
            let bottle = new ThrowableObject(this.character.x, this.character.y);
            if (bottle.isAboveGround()) {
                this.isBottleAboveGround = true;
                setTimeout(() => {
                    this.isBottleAboveGround = false;
                }, 1250);
            }
            this.throwableBottles.push(bottle);
            this.bottles.pop();
            this.bottleBar.quantity--;
        }
    }

    /**
 * Apply damage to a hit enemy, update boss bar if applicable, kill at 0,
 * and despawn thrown bottle shortly after.
 * @param {MovableObject} hittenEnemy
 * @param {number} index - Index in level.enemies
 * @param {ThrowableObject} bottle
 * @returns {void}
 */
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
        }, 1000 / 5);
    }
}