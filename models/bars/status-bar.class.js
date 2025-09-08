class StatusBar extends DrawableObject {
    x = 10;
    quantity = 0;
    percentage = 100;

    /**
 * Update the bar to represent a new percentage.
 * Selects and assigns the corresponding cached image.
 * 
 * @param {number} percentage - New health percentage (0–100).
 * @returns {void}
 */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_STATUSBAR_HEALTH[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
 * Resolve the correct image index based on current percentage.
 * 
 * @returns {number} Index in {@link IMAGES_STATUSBAR_HEALTH}.
 */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage < 100 && this.percentage >= 75) {
            return 4;
        } else if (this.percentage < 75 && this.percentage >= 50) {
            return 3;
        } else if (this.percentage < 50 && this.percentage >= 25) {
            return 2;
        } else if (this.percentage < 25 && this.percentage >= 1) {
            return 1;
        } else {
            return 0;
        };
    }
}