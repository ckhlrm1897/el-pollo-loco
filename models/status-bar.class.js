class StatusBar extends DrawableObject {
    x = 500;
    y = 199;

    IMAGES_STATUSBAR_HEALTH = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',
    ]

    percentage = 100;


    constructor() {
        super().loadImage('img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png');
        this.loadImages(this.IMAGES_STATUSBAR_HEALTH);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_STATUSBAR_HEALTH[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100){
            return 5;
        } else  if (this.percentage < 100 && this.percentage > 80) {
            return 4;
        } else if (this.percentage < 80 && this.percentage > 60) {
            return 3;
        } else if (this.percentage < 60 && this.percentage > 40) {
            return 2;
        } else if (this.percentage < 40 && this.percentage > 20) {
            return 1;
        } else {
            return 0;
        };
    }
}