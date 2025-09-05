class Endboss extends MovableObject {

    x = 2700;
    height = 400;
    width = 250;
    y = 50;
    energy = 100;
    hadFirstContact = false;

    offset = {
        top: 80,
        bottom: 120,
        left: 10,
        right: 50,
    }

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ]

    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ]

    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png',
    ]

    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ]

    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ]


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.speed = 4.15 + Math.random() * 5;
        this.animate(this.endbossAnimations, 1000 / 10);
    }

    i = 0;

    endbossAnimations = () => {
        if (this.isDead()) {
            win_sound.play();
            if (this.i <= 4) {
                this.playAnimation(this.IMAGES_DEAD);
                this.i++
                this.y += 10;
                this.speed = 0;
                win = true;
            }
            stopGame();
            setTimeout(() => {
                world.camera_x = 0
                world.playGame = false;
            }, 1000);

        } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
            this.moveLeft();
            this.speed += 2;
        } else if (world.character.x > 2240 && !this.hadFirstContact) {
            first_contact_sound.play();
            this.playAnimation(this.IMAGES_ALERT);
            this.hadFirstContact = true;
        } else if (this.isAlive && this.hadFirstContact) {
            this.playAnimation(this.IMAGES_WALKING);
            this.moveLeft();
        }
    }
}