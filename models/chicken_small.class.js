class SmallChicken extends MovableObject {
    y = 355;
    height = 70;
    width = 70;
    energy = 20;

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


    constructor(x) {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGE_DEAD);
        this.x = x + 200 + Math.random() * 500;
        // this.speed = 0;
        this.speed = 0.15 + Math.random() * 1.5;
        this.animate(this.chickenAnimations, 1000 / 20);
        this.animate(this.chickenMovements, 1000 / 60);
    }

    chickenAnimations = () => {
        if (this.isAlive()) {
            this.playAnimation(this.IMAGES_WALKING);
        } else if (this.isDead()) {
            this.playAnimation(this.IMAGE_DEAD);
            this.speed = 0;
        }
    }

    chickenMovements = () => {
        this.moveLeft();
    }
}