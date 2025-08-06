class Cloud extends MovableObject {
    y = 20;
    x = 0;
    height = 300;
    width = 500;

    constructor(image,x) {
        super().loadImage(image);
        this.x = x;
        this.x += Math.random() * 220 
        this.animate();

    } 

    animate() {
        setInterval(() => {
            this.moveLeft()
        }, 1000 / 30)

    }

}