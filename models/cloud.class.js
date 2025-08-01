class Cloud extends MovableObject {
    y = 20;
    height = 300;
    width = 500;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.loadImages([
            'img/5_background/layers/4_clouds/1.png',
            'img/5_background/layers/4_clouds/2.png',
        ])

        this.x = Math.random() * 500
        this.animate();

    }

    animate(){
        this.moveLeft()
    }
}