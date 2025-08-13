class HomeScreen extends DrawableObject{
    
    HOME_SCREEN = ['./img/9_intro_outro_screens/start/startscreen_1.png'];
    // HOME_SCREEN = [];

    constructor(){
        super().loadImage(this.HOME_SCREEN);
        this.x = 0;
        this.y = 0;
        this.height = 480;
        this.width = 720;
        // this.removeScreen();
    }


   TimeOut =  setTimeout(() => {
    this.height = 0;
    }, 5000);
}