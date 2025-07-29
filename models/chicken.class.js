class Chicken extends MovableObject {
 y = 355;
 height = 70;
 width = 70;
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = 200 + Math.random() * 500;
        this.animate();
    }

    animate(){
        setInterval(() =>{
              this.x -= 1;
              this.loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        }, 1000 / 30);
            this.loadImage('img/3_enemies_chicken/chicken_normal/1_walk/2_w.png');                
    }
}