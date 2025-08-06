class Bottle extends DrawableObject{
    height = 100;
    width = 80;

    constructor(){
        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.x =200 + Math.random() * 500;
        this.y = 330
    }
}
