class Level {
    enemies;
    clouds;
    backGroundLayers;
    level_end_x = 2800;

        /**
     * Create a new Level instance.
     *
     * @param {Array<Enemy>} enemies - List of enemy objects.
     * @param {Array<Cloud>} clouds - List of cloud objects.
     * @param {Array<BackgroundLayer>} backGroundLayers - Background layers for parallax effect.
     * @param {Array<Bottle>} bottles - Bottle collectibles placed in the level.
     * @param {Array<Coin>} coins - Coin collectibles placed in the level.
     */
    constructor(enemies, clouds, backGroundLayers, bottles, coins){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backGroundLayers = backGroundLayers; 
        this.bottles = bottles;
        this.coins = coins;
    }
}
