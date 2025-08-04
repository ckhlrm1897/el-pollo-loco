class Level {
    enemies;
    clouds;
    backGroundLayers;
    level_end_x = 2200;
    statusbar;


    constructor(enemies, clouds, backGroundLayers, statusbar){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backGroundLayers = backGroundLayers; 
        this.statusbar = statusbar;
    }
}
