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
    // Fisher–Yates keverés
    for (let i = IMAGES.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [IMAGES[i], IMAGES[j]] = [IMAGES[j], IMAGES[i]];
    }
    // Fisher–Yates keverés
    for (let i = VIDEOS.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [VIDEOS[i], VIDEOS[j]] = [VIDEOS[j], VIDEOS[i]];
    }
    const VIDEO_VARIABLES = [];
    for (let i = 0; i < VIDEOS.length; i++) {
        let video = document.createElement('video');
        video.src = VIDEOS[i];
        video.muted = true;
        video.preload = "metadata";
        video.addEventListener("loadedmetadata", ()=>{
            //console.log('Metadata loaded');
            //console.log(`Index:   ${i}    Duration:   ${video.duration}`);
        });
        VIDEO_VARIABLES.push(video);
    }
    await sleep(100);
    //generatorCanvas.appendChild(VIDEO_VARIABLES[0]);
    //console.log("asd");
    //await sleep(100000);

    let imageIndex = 0;
    let videoIndex = 0;
    let i = 0;
    while(i < x){
        //console.log("################ Image or Video: " + i);
        let imageOrSound = Math.floor(Math.random() * 2);
        if(imageOrSound == 0){
            if(imageIndex == IMAGES.length){
                console.log("--- RAN OUT OF IMAGES")
                alert("RAN OUT OF IMAGES");
                location.reload();
            }
            let image = document.createElement("img");
            image.src = IMAGES[imageIndex];
            generatorCanvas.innerHTML = "";
            generatorCanvas.appendChild(image);
            let random = Math.floor(Math.random() * 1800) + 600;
            console.log("Iteration: " + i + ", Image:  " + IMAGES[imageIndex].slice(13) + "  for  " + random / 1000 + "  seconds  -  playing")
            await sleep(random)
            
            imageIndex++;
        }else{
            if(videoIndex == VIDEOS.length){
                console.log("--- RAN OUT OF VIDEOS")
                alert("RAN OUT OF VIDEOS");
                location.reload();
            }
            let video = VIDEO_VARIABLES[videoIndex];
            video.play();
            generatorCanvas.innerHTML = "";
            generatorCanvas.appendChild(video);
            //console.log(video.duration);
            console.log("Iteration: " + i + ", Video:  " + VIDEOS[videoIndex].slice(13) + "  -  playing")
            await sleep(video.duration * 1000);
            videoIndex++;
        }
        i++;
    }
    console.log(x + " ITERATIONS DONE")
    alert(x + " ITERATIONS DONE");
    location.reload();
}


async function backgroundSoundsGenerator(){
    await sleep(1);
    // Fisher–Yates keverés
    for (let i = BACKGROUND_SOUNDS.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [BACKGROUND_SOUNDS[i], BACKGROUND_SOUNDS[j]] = [BACKGROUND_SOUNDS[j], BACKGROUND_SOUNDS[i]];
    }
    backgroundSoundsRecursion(0);
}
async function backgroundSoundsRecursion(x){
    await sleep(1);
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
                alert("RAN OUT OF BACKGROUND SOUNDS");
                location.reload();
            });
        }
    });
}


async function soundEffectsGenerator(){
    await sleep(1);
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
                alert("RAN OUT OF SOUND EFFECTS");
                location.reload();
            });
        }
    });
}








function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
