let level1;

/**
 * Initialize the default level and assign it to the global `level1`.
 * Creates enemies, clouds, background layers, bottles, and coins with their initial positions.
 * @returns {void}
 */
function initLevel() {

    level1 = new Level(
        [
            new Chicken(100),
            new SmallChicken(150*2),
            new Chicken(350*2),
            new SmallChicken(400*2),
            new Chicken(600*2),
            new SmallChicken(750*2),
            new Chicken(850*2),
            new SmallChicken(1000*2),
            new Chicken(1150*2),
            new SmallChicken(1300*2),
            new Chicken(1450*2),
            new Endboss(),
        ],
        [
            new Cloud('img/5_background/layers/4_clouds/1.png', 0),
            new Cloud('img/5_background/layers/4_clouds/2.png', 720),
            new Cloud('img/5_background/layers/4_clouds/1.png', 720 * 2)
        ],
        [
            new BackgroundLayer('img/5_background/layers/air.png', -720),
            new BackgroundLayer('img/5_background/layers/3_third_layer/2.png', -720),
            new BackgroundLayer('img/5_background/layers/2_second_layer/2.png', -720),
            new BackgroundLayer('img/5_background/layers/1_first_layer/2.png', -720),

            new BackgroundLayer('img/5_background/layers/air.png', 0),
            new BackgroundLayer('img/5_background/layers/3_third_layer/1.png', 0),
            new BackgroundLayer('img/5_background/layers/2_second_layer/1.png', 0),
            new BackgroundLayer('img/5_background/layers/1_first_layer/1.png', 0),
            new BackgroundLayer('img/5_background/layers/air.png', 720),
            new BackgroundLayer('img/5_background/layers/3_third_layer/2.png', 720),
            new BackgroundLayer('img/5_background/layers/2_second_layer/2.png', 720),
            new BackgroundLayer('img/5_background/layers/1_first_layer/2.png', 720),

            new BackgroundLayer('img/5_background/layers/air.png', 720 * 2),
            new BackgroundLayer('img/5_background/layers/3_third_layer/1.png', 720 * 2),
            new BackgroundLayer('img/5_background/layers/2_second_layer/1.png', 720 * 2),
            new BackgroundLayer('img/5_background/layers/1_first_layer/1.png', 720 * 2),
            new BackgroundLayer('img/5_background/layers/air.png', 720 * 3),
            new BackgroundLayer('img/5_background/layers/3_third_layer/2.png', 720 * 3),
            new BackgroundLayer('img/5_background/layers/2_second_layer/2.png', 720 * 3),
            new BackgroundLayer('img/5_background/layers/1_first_layer/2.png', 720 * 3),

            new BackgroundLayer('img/5_background/layers/air.png', 720 * 4),
            new BackgroundLayer('img/5_background/layers/3_third_layer/1.png', 720 * 4),
            new BackgroundLayer('img/5_background/layers/2_second_layer/1.png', 720 * 4),
            new BackgroundLayer('img/5_background/layers/1_first_layer/1.png', 720 * 4),
            new BackgroundLayer('img/5_background/layers/air.png', 720 * 5),
            new BackgroundLayer('img/5_background/layers/3_third_layer/2.png', 720 * 5),
            new BackgroundLayer('img/5_background/layers/2_second_layer/2.png', 720 * 5),
            new BackgroundLayer('img/5_background/layers/1_first_layer/2.png', 720 * 5),
        ],
        [
            new Bottle(0, 'img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
            new Bottle(150, 'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
            new Bottle(350, 'img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
            new Bottle(400, 'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
            new Bottle(600, 'img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
            new Bottle(850, 'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
            new Bottle(1000, 'img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
            new Bottle(1350, 'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
        ],
        [
            new Coin(150, 230),
            new Coin(150*2, 210),
            new Coin(150*3, 250),
            new Coin(150*4, 240),
            new Coin(150*5, 260),
            new Coin(150*6, 250),
            new Coin(150*7, 210),
            new Coin(150*8, 250),
            new Coin(150*9, 240),
            new Coin(150*10, 260),
            new Coin(150*11, 250),
        ]
    );
}