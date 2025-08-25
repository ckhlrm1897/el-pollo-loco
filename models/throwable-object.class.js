class ThrowableObject extends MovableObject {
    height = 100;
    width = 80;
    energy = 100;

    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }

    IMAGES_ROTATING = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    IMAGES_SPLASHING = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ]

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.x = x;
        this.y = y;
        this.speedX = 10;
        this.loadImages(this.IMAGES_ROTATING);
        this.loadImages(this.IMAGES_SPLASHING);
        this.throw();
    }

    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += this.speedX;
        }, 25);


        setInterval(() => {
            let i = 0;
            if (this.isAlive()) {
                this.playAnimation(this.IMAGES_ROTATING)
            } else if (this.isDead()) {
                if (i < 6){
                this.height = 200;
                this.width = 160;
                this.speedY = 0;
                this.speedX = 0;
                this.playAnimation(this.IMAGES_SPLASHING)
                i++
                }

            }
        }, 1000 / 20);
    }

}