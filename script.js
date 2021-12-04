console.log('yes');
let moves = 0;


let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let box7 = document.getElementById('box7');
let box8 = document.getElementById('box8');
let box9 = document.getElementById('box9');

let test = document.getElementById('test');
let mk = document.getElementById('mk');

let sound1 = new Audio('sound1.mp3');
let win1 = new Audio('win1.mp3');
let playagain = new Audio('playagain.mp3');
let clap1 = new Audio('clap1.mp3');

playagain.play();



test.onclick = function () {
    Swal.fire('You Won the Game, Well Done !!');
    box1.innerText = '1';
    box4.innerText = '2';
    box7.innerText = '3';
    box2.innerText = '4';
    box5.innerText = '5';
    box8.innerText = '6';
    box3.innerText = '7';
    box6.innerText = '8';
    box9.innerText = '';

    console.log("completed");
    win1.play();

    const start = () => {
        setTimeout(function () {
            confetti.start()
        });
    };

    const stop = () => {
        setTimeout(function () {
            confetti.stop()
        }, 5000);
    };
    start();
    // stop();
}


let restart = document.getElementById('restart');

restart.onclick = function () {
    location.reload();
}


function is() {
    if (box1.innerText == '1'
        &&
        box4.innerText == '2'
        &&
        box7.innerText == '3'
        &&
        box2.innerText == '4'
        &&
        box5.innerText == '5'
        &&
        box8.innerText == '6'
        &&
        box3.innerText == '7'
        &&
        box6.innerText == '8'
    ) {
        Swal.fire('You Won the Game ! Well Done');
        console.log("completed");
        win1.play();
        const start = () => {
            setTimeout(function () {
                confetti.start()
            });
        };
        const stop = () => {
            setTimeout(function () {
                confetti.stop()
            }, 5000);
        };
        start();
        // stop();
        // clap1.play();
        return 1;
    }
    else {
        return 0;
    }
}

var myArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// random box generate
for (let i = 1; i < 9; i++) {
    var tempo = Math.floor(Math.random() * 9);

    while (myArr[tempo] == 1 || tempo == 0) {
        tempo = Math.floor(Math.random() * 9);
    }

    myArr[tempo] = 1;
    document.getElementById(`box${i}`).innerHTML = tempo;

}

box1.onclick = function () {
    if (box2.innerText == '') {
        let temp = box1.innerText;
        box2.innerHTML = temp;
        box1.innerHTML = '';
        moves++;
        mk.innerHTML = ` <span class="movecntr" id="mvctr" > Moves = ${moves} </span>`
        sound1.play();


    }
    else if (box4.innerText == '') {
        let temp = box1.innerText;
        box4.innerHTML = temp;
        box1.innerHTML = '';
        moves++;
        mk.innerHTML = ` <span class="movecntr" id="mvctr" > Moves = ${moves} </span>`
        sound1.play();
        is();

    }
}

box2.onclick = function () {
    if (box1.innerText == '') {
        let temp = box2.innerText;
        box1.innerHTML = temp;
        box2.innerHTML = '';
        moves++;
        mk.innerHTML = ` <span class="movecntr" id="mvctr" > Moves = ${moves} </span>`
        sound1.play();
        is();

    }
    else if (box5.innerText == '') {
        let temp = box2.innerText;
        box5.innerHTML = temp;
        box2.innerHTML = '';
        moves++;
        mk.innerHTML = ` <span class="movecntr" id="mvctr" > Moves = ${moves} </span>`
        sound1.play();
        is();

    }
    else if (box3.innerText == '') {
        let temp = box2.innerText;
        box3.innerHTML = temp;
        box2.innerHTML = '';
        moves++;
        mk.innerHTML = ` <span class="movecntr" id="mvctr" > Moves = ${moves} </span>`
        sound1.play();
        is();

    }
}


box3.onclick = function () {
    if (box2.innerText == '') {
        let temp = box3.innerText;
        box2.innerHTML = temp;
        box3.innerHTML = '';
        moves++;
        mk.innerHTML = ` <span class="movecntr" id="mvctr" > Moves = ${moves} </span>`
        sound1.play();
        is();

    }
    else if (box6.innerText == '') {
        let temp = box3.innerText;
        box6.innerHTML = temp;
        box3.innerHTML = '';
        moves++;
        mk.innerHTML = ` <span class="movecntr" id="mvctr" > Moves = ${moves} </span>`
        sound1.play();
        is();

    }
}


box4.onclick = function () {
    if (box1.innerText == '') {
        let temp = box4.innerText;
        box1.innerHTML = temp;
        box4.innerHTML = '';
        moves++;
        mk.innerHTML = ` <span class="movecntr" id="mvctr" > Moves = ${moves} </span>`
        sound1.play();
        is();

    }
    else if (box5.innerText == '') {
        let temp = box4.innerText;
        box5.innerHTML = temp;
        box4.innerHTML = '';
        moves++;
        mk.innerHTML = ` <span class="movecntr" id="mvctr" > Moves = ${moves} </span>`
        sound1.play();
        is();

    }
    else if (box7.innerText == '') {
        let temp = box4.innerText;
        box7.innerHTML = temp;
        box4.innerHTML = '';
        moves++;
        mk.innerHTML = ` <span class="movecntr" id="mvctr" > Moves = ${moves} </span>`
        sound1.play();
        is();

    }
}
box5.onclick = function () {
    if (box4.innerText == '') {
        let temp = box5.innerText;
        box4.innerHTML = temp;
        box5.innerHTML = '';
        moves++;
        mk.innerHTML = ` <span class="movecntr" id="mvctr" > Moves = ${moves} </span>`
        sound1.play();
        is();

    }
    else if (box2.innerText == '') {
        let temp = box5.innerText;
        box2.innerHTML = temp;
        box5.innerHTML = '';
        moves++;
        mk.innerHTML = ` <span class="movecntr" id="mvctr" > Moves = ${moves} </span>`
        sound1.play();
        is();

    }
    else if (box6.innerText == '') {
        let temp = box5.innerText;
        box6.innerHTML = temp;
        box5.innerHTML = '';
        moves++;
        mk.innerHTML = ` <span class="movecntr" id="mvctr" > Moves = ${moves} </span>`
        sound1.play();
        is();

    }
    else if (box8.innerText == '') {
        let temp = box5.innerText;
        box8.innerHTML = temp;
        box5.innerHTML = '';
        moves++;
        mk.innerHTML = ` <span class="movecntr" id="mvctr" > Moves = ${moves} </span>`
        sound1.play();
        is();

    }
}

box6.onclick = function () {
    if (box3.innerText == '') {
        let temp = box6.innerText;
        box3.innerHTML = temp;
        box6.innerHTML = '';
        moves++;
        mk.innerHTML = ` <span class="movecntr" id="mvctr" > Moves = ${moves} </span>`
        sound1.play();
        is();

    }
    else if (box9.innerText == '') {
        let temp = box6.innerText;
        box9.innerHTML = temp;
        box6.innerHTML = '';
        moves++;
        mk.innerHTML = ` <span class="movecntr" id="mvctr" > Moves = ${moves} </span>`
        sound1.play();
        is();

    }
    else if (box5.innerText == '') {
        let temp = box6.innerText;
        box5.innerHTML = temp;
        box6.innerHTML = '';
        moves++;
        mk.innerHTML = ` <span class="movecntr" id="mvctr" > Moves = ${moves} </span>`
        sound1.play();
        is();

    }
}

box7.onclick = function () {
    if (box4.innerText == '') {
        let temp = box7.innerText;
        box4.innerHTML = temp;
        box7.innerHTML = '';
        moves++;
        mk.innerHTML = ` <span class="movecntr" id="mvctr" > Moves = ${moves} </span>`
        sound1.play();
        is();

    }
    else if (box8.innerText == '') {
        let temp = box7.innerText;
        box8.innerHTML = temp;
        box7.innerHTML = '';
        moves++;
        mk.innerHTML = ` <span class="movecntr" id="mvctr" > Moves = ${moves} </span>`
        sound1.play();
        is();

    }
}

box8.onclick = function () {
    if (box7.innerText == '') {
        let temp = box8.innerText;
        box7.innerHTML = temp;
        box8.innerHTML = '';
        moves++;
        mk.innerHTML = ` <span class="movecntr" id="mvctr" > Moves = ${moves} </span>`
        sound1.play();
        is();

    }
    else if (box9.innerText == '') {
        let temp = box8.innerText;
        box9.innerHTML = temp;
        box8.innerHTML = '';
        moves++;
        mk.innerHTML = ` <span class="movecntr" id="mvctr" > Moves = ${moves} </span>`
        sound1.play();
        is();

    }
    else if (box5.innerText == '') {
        let temp = box8.innerText;
        box5.innerHTML = temp;
        box8.innerHTML = '';
        moves++;
        mk.innerHTML = ` <span class="movecntr" id="mvctr" > Moves = ${moves} </span>`
        sound1.play();
        is();

    }
}


box9.onclick = function () {
    if (box8.innerText == '') {
        let temp = box9.innerText;
        box8.innerHTML = temp;
        box9.innerHTML = '';
        moves++;
        mk.innerHTML = ` <span class="movecntr" id="mvctr" > Moves = ${moves} </span>`
        sound1.play();
        is();

    }
    else if (box6.innerText == '') {
        let temp = box9.innerText;
        box6.innerHTML = temp;
        box9.innerHTML = '';
        moves++;
        mk.innerHTML = ` <span class="movecntr" id="mvctr" > Moves = ${moves} </span>`
        sound1.play();
        is();

    }
}
