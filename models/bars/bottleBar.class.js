class BottleBar extends StatusBar {

    IMAGES_STATUSBAR_BOTTLE = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png',
    ]

    constructor() {
        super();
        this.loadImages(this.IMAGES_STATUSBAR_BOTTLE);
        this.x = 10;
        this.y = 80;
        this.height = 50;
        this.setQuantity(this.IMAGES_STATUSBAR_BOTTLE);
    }


}

