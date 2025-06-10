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
    soundEffectsGenerator();
});


async function imagesAndVideosGenerator(x){
    let i = 0;
    while(i < x){
        console.log("Image or Video: " + i);
        

        await sleep(1000);
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
    console.log("Background sound:  " + BACKGROUND_SOUNDS[x].slice(23) + "  -  playing");
    backgroundSound.addEventListener("ended", ()=>{
        //console.log("Background sound:   " + BACKGROUND_SOUNDS[x].slice(23) + "  -  done");
        if((x + 2) < BACKGROUND_SOUNDS.length){
            backgroundSoundsRecursion(x + 1);
        }else{
            let backgroundSound = new Audio(BACKGROUND_SOUNDS[x + 1]);
            backgroundSound.volume = 0.4;
            backgroundSound.play();
            console.log("Background sound:  " + BACKGROUND_SOUNDS[x + 1].slice(23) + "  -  playing");
            backgroundSound.addEventListener("ended", ()=>{
                //console.log("Background sound:   " + BACKGROUND_SOUNDS[x + 1].slice(23) + "  -  done");
                console.log("--- RAN OUT OF BACKGROUND SOUNDS")
            });
        }
    });
}


async function soundEffectsGenerator(){
    // Fisher–Yates keverés
    for (let i = SOUND_EFFECTS.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [SOUND_EFFECTS[i], SOUND_EFFECTS[j]] = [SOUND_EFFECTS[j], SOUND_EFFECTS[i]];
    }
    soundEffectsRecursion(0);
}
async function soundEffectsRecursion(x){
    let random = Math.floor(Math.random() * 3000);
    console.log("Sound effect:  " + random / 1000 + "  seconds  -  waiting")
    await sleep(random);
    let soundEffect = new Audio(SOUND_EFFECTS[x]);
    soundEffect.volume = 0.4;
    soundEffect.playbackRate = Math.random() * (1.6 - 0.4) + 0.4;
    soundEffect.play();
    console.log("Sound effect:  " + SOUND_EFFECTS[x].slice(19) + " -  playing");
    soundEffect.addEventListener("ended", ()=>{
        if((x + 2) < SOUND_EFFECTS.length){
            soundEffectsRecursion(x + 1);
        }else{
            let soundEffect = new Audio(SOUND_EFFECTS[x + 1]);
            soundEffect.volume = 0.4;
            soundEffect.play();
            console.log("Sound effect:  " + SOUND_EFFECTS[x + 1].slice(19) + " -  playing");
            soundEffect.addEventListener("ended", ()=>{
                console.log("--- RAN OUT OF SOUND EFFECTS")
            });
        }
    });
}








function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
