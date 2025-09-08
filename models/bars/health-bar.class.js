class HealthBar extends StatusBar {

    /**
 * Paths to the player health bar images (0%–100%).
 * @type {string[]}
 */
    IMAGES_STATUSBAR_HEALTH = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',
    ]

    /**
 * Create a new player health bar.
 * Loads all images, positions the bar at the top, sets its size, and initializes to 100%.
 */
    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUSBAR_HEALTH);
        this.y = 0;
        this.height = 50;
        this.setPercentage(100);
    }

}