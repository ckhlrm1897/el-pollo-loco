class BottleBar extends StatusBar {

/**
 * Create a new BottleBar.
 * Loads the salsa bottle icon and positions it on the screen.
 */
    constructor() {
        super();
        this.loadImage('img/7_statusbars/3_icons/icon_salsa_bottle.png');
        this.x = -2;
        this.y = 85;
        this.height = 50;
        this.width = 60;
    }
}
