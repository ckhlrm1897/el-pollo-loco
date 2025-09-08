class CoinBar extends StatusBar {

/**
 * Create a new CoinBar.
 * Loads the coin icon and positions it on the screen.
 */
    constructor() {
        super().loadImage('img/7_statusbars/3_icons/icon_coin.png');
        this.y = 40;
        this.x = 8;
        this.height = 50;
        this.width = 60;
    }

}