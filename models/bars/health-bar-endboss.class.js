class HealthBarEndboss extends StatusBar {

    /**
     * Paths to the endboss health bar images (0%–100%).
     * @type {string[]}
     */
    IMAGES_STATUSBAR_HEALTH = [
        'img/7_statusbars/2_statusbar_endboss/orange/orange0.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange20.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange40.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange60.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange80.png',
        'img/7_statusbars/2_statusbar_endboss/orange/orange100.png',
    ]

    /**
 * Create the Endboss health bar.
 * Loads all images, positions the bar, sets its size, and initializes to 100%.
 */
    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUSBAR_HEALTH);
        this.x = 570
        this.y = 10;
        this.height = 50;
        this.setPercentage(100);
    }


}