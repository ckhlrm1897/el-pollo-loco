const level1 = new Level(
    [
        // new Chicken(),
        // new Chicken(),
        // new Chicken(),
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
        new Bottle(100),
        new Bottle(200),
        new Bottle(300),
        new Bottle(400),
        new Bottle(500),
        new Bottle(600),
        new Bottle(700),
        new Bottle(800),
    ],
);