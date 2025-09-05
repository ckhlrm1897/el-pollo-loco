let world;
let keyboard = new Keyboard()
let audio = new Audio('audio/acoustic-mexican-guitar-218610.mp3');
let mute = true;
let muteRef = document.getElementById("mute");
let btn_left = document.getElementById("left-btn");
let btn_right = document.getElementById("right-btn");
let btn_throw = document.getElementById("bottle-btn");
let btn_jump = document.getElementById("jump-btn");
let jump_sound = new Audio('audio/jump.mp3');
let throw_sound = new Audio('audio/throw.mp3');
let get_coin_sound = new Audio('audio/get_coin.mp3');
let pick_up_bottle_sound = new Audio('audio/pick_bottle.mp3');
let autsch_sound = new Audio('audio/autsch.mp3');
let win_sound = new Audio('audio/win.mp3');
let first_contact_sound = new Audio('audio/first_contact.mp3');
let chicken_sound = new Audio('audio/chicken_sound.mp3');
let punch_sound = new Audio('audio/punch.mp3');
let intervalIds = [];
let win = false;
let canvas = document.getElementById("canvas");


function init() {
    getFromLocalStorage();
    if (mute) {
        setAllMute();
        document.getElementById("un-mute").classList.add('d_none');
        document.getElementById("mute").classList.remove('d_none');
    } else if (!mute) {
        setAllUnMute();
        muteRef.classList.add("d_none")
        document.getElementById("un-mute").classList.remove('d_none');
    }
}

function setAllMute() {
    audio.muted = true;
    jump_sound.muted = true;
    throw_sound.muted = true;
    get_coin_sound.muted = true;
    pick_up_bottle_sound.muted = true;
    autsch_sound.muted = true;
    win_sound.muted = true;
    first_contact_sound.muted = true;
    chicken_sound.muted = true;
    punch_sound.muted = true;
}

function setAllUnMute() {
    audio.muted = false;
    jump_sound.muted = false;
    throw_sound.muted = false;
    get_coin_sound.muted = false;
    pick_up_bottle_sound.muted = false;
    autsch_sound.muted = false;
    win_sound.muted = false;
    first_contact_sound.muted = false;
    chicken_sound.muted = false;
    punch_sound.muted = false;
}

function unMute() {
    if (mute) {
        setAllUnMute()

        muteRef.classList.add("d_none")
        document.getElementById("un-mute").classList.remove('d_none');
        mute = false;
    } else {
        setAllMute()
        document.getElementById("un-mute").classList.add('d_none');
        document.getElementById("mute").classList.remove('d_none');
        mute = true;
    }
    saveToLocalStorage();
}

function saveToLocalStorage() {
    localStorage.setItem("mute", JSON.stringify(mute));
}

function getFromLocalStorage() {
    let myNewData = localStorage.getItem("mute");
    let obj = JSON.parse(myNewData);

    if (obj != null) {
        mute = obj;
    }

}

function startGame() {
    audio.play();
    canvas.classList.remove("d_none");
    document.getElementById('home-screen').classList.add('d_none');
    world = new World(canvas, keyboard);
    document.getElementById("mobile-btns").classList.remove("d_none");
}

function restart() {
    audio.play();
    world = null;
    document.getElementById('game-over').classList.add('d_none');
    document.getElementById('win').classList.add('d_none');
    keyboard = new Keyboard()
    intervalIds = [];
    win = false;
    world = new World(canvas, keyboard);
    document.getElementById('restart').classList.add('d_none');
    document.getElementById('exit').classList.add('d_none');
}

function stopGame() {
    intervalIds.forEach(clearInterval);
    setTimeout(() => {
        if (win) {
            document.getElementById('win').classList.remove('d_none')
        } else if (!win) {
            document.getElementById('game-over').classList.remove('d_none')
        }
        document.getElementById('restart').classList.remove('d_none');
        document.getElementById('exit').classList.remove('d_none');
        document.getElementById('mobile-btns').classList.add('d_none');
    }, 1000);
}

function exit(){
    document.getElementById('home-screen').classList.remove('d_none');
    canvas.classList.add("d_none");
    document.getElementById('game-over').classList.add('d_none');
    document.getElementById('win').classList.add('d_none');
    document.getElementById('exit').classList.add('d_none');
    document.getElementById('restart').classList.add('d_none');
    document.getElementById("mobile-btns").classList.add("d_none");
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
        if (!mute) {
            jump_sound.play();
        }
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