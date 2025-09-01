let canvas;
let world;
let keyboard = new Keyboard()
let audio = new Audio('audio/acoustic-mexican-guitar-218610.mp3');
let mute = true;
let btn_left = document.getElementById("left-btn");
let btn_right = document.getElementById("right-btn");
let btn_throw = document.getElementById("bottle-btn");
let btn_jump = document.getElementById("jump-btn");
let intervalIds = [];
let win = false;
let lose = false;


function init() {
    // getFromLocalStorage();
}

function unMute() {
    if (mute) {
        audio.play();
        let muteRef = document.getElementById("mute");
        muteRef.classList.add("d_none")
        document.getElementById("un-mute").classList.remove('d_none');
        mute = false;
    } else {
        audio.pause();
        document.getElementById("un-mute").classList.add('d_none');
        document.getElementById("mute").classList.remove('d_none');
        mute = true;
    }
    // saveToLocalStorage();
}

// function saveToLocalStorage(){
//     localStorage.setItem("mute", JSON.stringify(mute));
// }


// function getFromLocalStorage() {
//     let myNewData = localStorage.getItem("mute");
//     let obj = JSON.parse(myNewData);

//     if (obj != null) {
//         mute = obj;
//     }

// }

function startGame() {
    canvas = document.getElementById("canvas");
    document.getElementById('canvas').classList.remove("d_none");
    document.getElementById('home-screen').classList.add('d_none');
    world = new World(canvas, keyboard);
}

function stopGame() {
    intervalIds.forEach(clearInterval);
    // if (win) {
    //     // setTimeout(() => {
    //     //     // document.getElementById('canvas').classList.add("d_none");
    //     //     // document.getElementById('home-screen').classList.remove('d_none');
    //     // }, 1000);
    // }

}

btn_right.addEventListener('touchstart', (event) => {
    event.preventDefault();
    keyboard.RIGHT = true;
})


btn_right.addEventListener('touchend', (event) => {
    event.preventDefault();
    keyboard.RIGHT = false;
})

btn_left.addEventListener('touchstart', (event) => {
    event.preventDefault();
    keyboard.LEFT = true;
})

btn_left.addEventListener('touchend', (event) => {
    event.preventDefault();
    keyboard.LEFT = false;
})

btn_throw.addEventListener('touchstart', (event) => {
    event.preventDefault();
    keyboard.D = true;
})

btn_throw.addEventListener('touchend', (event) => {
    event.preventDefault();
    keyboard.D = false;
})

btn_jump.addEventListener('touchstart', (event) => {
    event.preventDefault();
    keyboard.SPACE = true;
})

btn_jump.addEventListener('touchend', (event) => {
    event.preventDefault();
    keyboard.SPACE = false;
})

document.addEventListener('keydown', (event) => {
    if (event.keyCode == 68) {
        keyboard.D = true;
    }

    if (event.keyCode == 38) {
        keyboard.UP = true;
    }

    if (event.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (event.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }
});

document.addEventListener('keyup', (event) => {

    if (event.keyCode == 68) {
        keyboard.D = false;
    }

    if (event.keyCode == 38) {
        keyboard.UP = false;
    }

    if (event.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (event.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (event.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }
});

// function fullscreen() {
//     let fullscreen = document.getElementById('canvas');
//     openFullscreen(fullscreen);
// }

// function openFullscreen(elem) {
//     if (elem.requestFullscreen) {
//         elem.requestFullscreen();
//     } else if (elem.webkitRequestFullscreen) { /* Safari */
//         elem.webkitRequestFullscreen();
//     } else if (elem.msRequestFullscreen) { /* IE11 */
//         elem.msRequestFullscreen();
//     }
// }