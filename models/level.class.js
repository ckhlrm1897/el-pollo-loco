class Level {
    enemies;
    clouds;
    backGroundLayers;
    level_end_x = 2200;

    constructor(enemies, clouds, backGroundLayers){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backGroundLayers = backGroundLayers; 
    }
}
