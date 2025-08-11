class Level {
    enemies;
    clouds;
    backGroundLayers;
    level_end_x = 2200;


    constructor(enemies, clouds, backGroundLayers, bottles, coins){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backGroundLayers = backGroundLayers; 
        this.bottles = bottles;
        this.coins = coins;
    }
}
