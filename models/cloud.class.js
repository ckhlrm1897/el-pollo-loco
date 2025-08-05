class Cloud extends MovableObject {
    y = 20;
    x = 0;
    height = 300;
    width = 500;

    constructor(image) {
        super().loadImage(image);

        this.x += 250 + Math.random() * 2220 
        this.animate();

    } 

    animate() {
        setInterval(() => {
            this.moveLeft()
        }, 1000 / 30)

    }

}