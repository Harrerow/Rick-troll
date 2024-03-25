const button = document.querySelector('button');
const p = document.querySelector('p');
const video = document.querySelector('video');
const h1 = document.querySelector('h1');

let btnCount = 0

function btnSoundEvent() {
    const audio = new Audio('sound/yipeeee.mp3');
    audio.volume = 0.2;

    if(Math.random()<=0.1){
        audio.play();
    }
}

function btnDelayEvent() {
    console.log('Why find this')
    button.disabled = true;
    setTimeout(function() {
        button.disabled = false;
    }, 300);
}

function btnTextEvent() {
    btnCount += 1

    if(btnCount == 10) {
        p.innerText="What are you doing";
    } else {
        p.innerText="";
    }

    if(btnCount == 20) {
        p.innerText="Stop click button";
    }
}

function btnRemoveEvent() {
    if(btnCount == 30) {
        button.style.display = 'none';
        h1.style.display = 'none';
    }
}

function btnRickrollEvent() {
    const audio = new Audio('sound/rickroll.mp3');
    audio.volume = 0.2;

    if(btnCount == 30) {
        audio.play();
        video.src = 'video/rickroll.mp4'
        video.load();
        video.play();
    }
}

button.addEventListener('click',btnSoundEvent);

button.addEventListener('click',btnDelayEvent);

button.addEventListener('click',btnTextEvent);

button.addEventListener('click',btnRemoveEvent);

button.addEventListener('click',btnRickrollEvent);