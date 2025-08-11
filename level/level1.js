const level1 = new Level(
    [
        new Chicken(100),
        new Chicken(350),
        new Chicken(600),
        new Chicken(850),
        new Chicken(1000),
        new Chicken(1150),
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
        new Coin(0, 'img/8_coin/coin_1.png'),
    ]
);