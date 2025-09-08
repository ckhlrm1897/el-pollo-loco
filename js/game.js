let world;

/** @type {Keyboard} */
let keyboard = new Keyboard()

/** @type {boolean} Global mute toggle */
let mute = true;

/** @type {HTMLButtonElement} */
let muteRef = document.getElementById("mute");
let btn_left = document.getElementById("left-btn");
let btn_right = document.getElementById("right-btn");
let btn_throw = document.getElementById("bottle-btn");
let btn_jump = document.getElementById("jump-btn");

let touch = false;

/** @type {HTMLAudioElement} */
let audio = new Audio('audio/acoustic-mexican-guitar-218610.mp3');
let jump_sound = new Audio('audio/jump.mp3');
let throw_sound = new Audio('audio/throw.mp3');
let get_coin_sound = new Audio('audio/get_coin.mp3');
let pick_up_bottle_sound = new Audio('audio/pick_bottle.mp3');
let autsch_sound = new Audio('audio/autsch.mp3');
let win_sound = new Audio('audio/win.mp3');
let first_contact_sound = new Audio('audio/first_contact.mp3');
let chicken_sound = new Audio('audio/chicken_sound.mp3');
let punch_sound = new Audio('audio/punch.mp3');
let game_over_sound = new Audio('audio/game_over.mp3');
let snorking_sound = new Audio('audio/snorking.mp3');

/** @type {Array<number>} Collected interval IDs so they can be cleared */
let intervalIds = [];

/** @type {boolean} True if player has won */
let win = false;

/** @type {HTMLCanvasElement} */
let canvas = document.getElementById("canvas");

/**
 * Initialize mute state from localStorage and update UI.
 * @returns {void}
 */
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

/**
 * Mute all sounds in the game.
 * @returns {void}
 */
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
    game_over_sound.muted = true;
    snorking_sound.muted = true;
}

/**
 * Unmute all sounds in the game.
 * @returns {void}
 */
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
    game_over_sound.muted = false;
    snorking_sound.muted = false;
}

/**
 * Toggle between mute and unmute, update UI and persist state.
 * @returns {void}
 */
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

/**
 * Save current mute state to localStorage.
 * @returns {void}
 */
function saveToLocalStorage() {
    localStorage.setItem("mute", JSON.stringify(mute));
}

/**
 * Load mute state from localStorage if present.
 * @returns {void}
 */
function getFromLocalStorage() {
    let myNewData = localStorage.getItem("mute");
    let obj = JSON.parse(myNewData);
    if (obj != null) {
        mute = obj;
    }
}

/**
 * Start a new game world and switch UI from home screen to canvas.
 * @returns {void}
 */
function startGame() {
    audio.play();
    canvas.classList.remove("d_none");
    document.getElementById('home-screen').classList.add('d_none');
    world = new World(canvas, keyboard);
    document.getElementById("mobile-btns").classList.remove("d_none");
    document.getElementById("footer").classList.add("d_none");
    if (touch) {
        document.getElementById("mobile-btns").classList.add("touch_on");
    } else if (!touch) {
        document.getElementById("mobile-btns").classList.remove("touch_on");
    }
}

/**
 * Restart the game after game over or win.
 * Resets world, keyboard, intervals and UI.
 * @returns {void}
 */
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
    document.getElementById('mobile-btns').classList.remove('d_none');
}

/**
 * Stop the game loop, show win/lose screen and restart/exit buttons.
 * @returns {void}
 */
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
        document.getElementById('footer').classList.add('d_none');
    }, 1000);
}

/**
 * Exit the current game and return to home screen UI.
 * @returns {void}
 */
function exit() {
    document.getElementById('home-screen').classList.remove('d_none');
    canvas.classList.add("d_none");
    document.getElementById('game-over').classList.add('d_none');
    document.getElementById('win').classList.add('d_none');
    document.getElementById('exit').classList.add('d_none');
    document.getElementById('restart').classList.add('d_none');
    document.getElementById("mobile-btns").classList.add("d_none");
    document.getElementById('footer').classList.remove('d_none');
}

/**
 * Toggle Touch Buttons
 * @returns {void}
 */
function touchToggle() {
    if (!touch) {
        touch = true;
        document.getElementById("touch-on").classList.add("d_none");
        document.getElementById("touch-off").classList.remove("d_none");
    } else if (touch) {
        touch = false;
        document.getElementById("touch-on").classList.remove("d_none");
        document.getElementById("touch-off").classList.add("d_none");
    }

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
    if (event.key == 'd') {
        keyboard.D = true;
    }
    if (event.key == 'ArrowRight') {
        keyboard.RIGHT = true;
    }
    if (event.key == 'ArrowLeft') {
        keyboard.LEFT = true;
    }
    if (event.key == ' ') {
        keyboard.SPACE = true;
        if (!mute) {
            jump_sound.play();
        }
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key == 'd') {
        keyboard.D = false;
    }
    if (event.key == 'ArrowRight') {
        keyboard.RIGHT = false;
    }
    if (event.key == 'ArrowLeft') {
        keyboard.LEFT = false;
    }
    if (event.key == ' ') {
        keyboard.SPACE = false;
    }
});
