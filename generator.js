import { IMAGES } from "./media/imagesArray.js";
import { VIDEOS } from "./media/videosArray.js";
import { SOUND_EFFECTS } from "./media/soundEffectsArray.js";
import { BACKGROUND_SOUNDS } from "./media/backgroundSoundsArray.js";

const startButton = document.getElementById("start-button");
const generatorCanvas = document.getElementById("generator-canvas");

startButton.addEventListener("click", function(){
    let iterationCount = document.getElementById("iteration-count").value;
    iterationCount = Number(iterationCount);

    imagesAndVideosGenerator(iterationCount);
    backgroundSoundsGenerator();
});

function imagesAndVideosGenerator(x){

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

    backgroundSoundsRecursion(0);
}
function backgroundSoundsRecursion(x){
    let backgroundSound = new Audio(BACKGROUND_SOUNDS[x]);
    backgroundSound.volume = 0.4;
    backgroundSound.play();
    console.log(BACKGROUND_SOUNDS[x].slice(23) + "  -  playing");
    backgroundSound.addEventListener("ended", ()=>{
        console.log(BACKGROUND_SOUNDS[x].slice(23) + "  -  done");
        if((x + 2) < BACKGROUND_SOUNDS.length){
            backgroundSoundsRecursion(x + 1);
        }else{
            let backgroundSound = new Audio(BACKGROUND_SOUNDS[x + 1]);
            backgroundSound.volume = 0.4;
            backgroundSound.play();
            console.log(BACKGROUND_SOUNDS[x + 1].slice(23) + "  -  playing");
            backgroundSound.addEventListener("ended", ()=>{
                console.log(BACKGROUND_SOUNDS[x + 1].slice(23) + "  -  done");
                console.log("RAN OUT OF BACKGROUND SOUNDS")
            });
        }
    });
}



