class Coin extends MovableObject {

    height = 100;
    width = 80;

    offset = {
        top: 20,
        bottom: 40,
        left: 35,
        right: 50,
    }

    COIN_IMAGES = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ]

    constructor(x, y) {
        super().loadImage(this.COIN_IMAGES[0])
        this.x = x + 200 + Math.random() * 1000;
        this.y = (y + Math.random()) * 0.9;
        this.loadImages(this.COIN_IMAGES);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.COIN_IMAGES)
        }, 1000 / 3);
    }
}