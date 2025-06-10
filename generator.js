import { IMAGES } from "./media/imagesArray.js";
import { VIDEOS } from "./media/videosArray.js";
import { SOUND_EFFECTS } from "./media/soundEffectsArray.js";
import { BACKGROUND_SOUNDS } from "./media/backgroundSoundsArray.js";

const startButton = document.getElementById("start-button");
const generatorCanvas = document.getElementById("generator-canvas");
let running;

startButton.addEventListener("click", function(){
    let iterationCount = document.getElementById("iteration-count").value;
    iterationCount = Number(iterationCount);

    imagesAndVideosIterator(iterationCount);
    backgroundSoundsGenerator();
});

function imagesAndVideosIterator(x){

    let i = 0;
    while(i < x){
        //console.log(Math.floor(Math.random() * 2));
        //generatorCanvas.innerHTML=`${i}`;
        console.log(i);
        i++;
    }
}

function backgroundSoundsGenerator(){
    // Fisher–Yates keverés
    for (let i = BACKGROUND_SOUNDS.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [BACKGROUND_SOUNDS[i], BACKGROUND_SOUNDS[j]] = [BACKGROUND_SOUNDS[j], BACKGROUND_SOUNDS[i]];
    }

    console.log(BACKGROUND_SOUNDS[0] + "  -  playing");
    let backgroundSound = new Audio(BACKGROUND_SOUNDS[0]);
    backgroundSound.volume = 0.2;
    backgroundSound.play();
    


    while(false){
        console.log("running");
    }
}