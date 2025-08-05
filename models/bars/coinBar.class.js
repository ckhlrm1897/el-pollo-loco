class CoinBar extends StatusBar {

    

    IMAGES_STATUSBAR_COIN = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png'
    ]

    coins = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUSBAR_COIN);
        this.x = 10;
        this.y = 40;
        this.height = 50;
        this.setCoins(0);
    }

    setCoins(coins) {
        this.percentage = coins;
        let path = this.IMAGES_STATUSBAR_COIN[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

        resolveImageIndex() {
        if (this.coins == 0) {
            return 1;
        } else if (this.coins > 1) {
            return 2;
        } else if (this.coins > 2) {
            return 3;
        } else if (this.coins > 3) {
            return 4;
        } else if (this.coins > 4)  {
            return 5;
        } else {
            return 0;
        };
    }
}