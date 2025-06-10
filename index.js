import { IMAGES } from "./media/imagesArray.js";
import { VIDEOS } from "./media/videosArray.js";
import { SOUND_EFFECTS } from "./media/soundEffectsArray.js";
import { BACKGROUND_SOUNDS } from "./media/backgroundSoundsArray.js";

const imagesButton = document.getElementById("images-button");
const videosButton = document.getElementById("videos-button");
const soundEffectsButton = document.getElementById("sound-effects-button");
const backgroundSoundsButton = document.getElementById("background-sounds-button");

const galleryContent = document.getElementById("gallery-content");


imagesButton.addEventListener("click", function(){
    galleryContent.className = "";
    galleryContent.classList.add("gallery-content-images");
    galleryContent.innerHTML = "";

    // Fisher–Yates keverés
    for (let i = IMAGES.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [IMAGES[i], IMAGES[j]] = [IMAGES[j], IMAGES[i]];
    }

    for (let i = 0; i < IMAGES.length; i++) {
        const img = document.createElement("img");
        img.src = IMAGES[i];
        galleryContent.appendChild(img);
    }
});


videosButton.addEventListener("click", function(){
    galleryContent.className = "";
    galleryContent.classList.add("gallery-content-videos");
    galleryContent.innerHTML = "";

    // Fisher–Yates keverés
    for (let i = VIDEOS.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [VIDEOS[i], VIDEOS[j]] = [VIDEOS[j], VIDEOS[i]];
    }

    for (let i = 0; i < VIDEOS.length; i++) {
        const video = document.createElement("video");
        video.src = VIDEOS[i];
        video.controls = true;
        video.muted = true;
        galleryContent.appendChild(video);
    }
});


soundEffectsButton.addEventListener("click", function(){
    galleryContent.className = "";
    galleryContent.classList.add("gallery-content-sound-effects");
    galleryContent.innerHTML = "";

    // Fisher–Yates keverés
    for (let i = SOUND_EFFECTS.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [SOUND_EFFECTS[i], SOUND_EFFECTS[j]] = [SOUND_EFFECTS[j], SOUND_EFFECTS[i]];
    }

    for (let i = 0; i < SOUND_EFFECTS.length; i++) {
        const audio = document.createElement("audio");
        audio.src = SOUND_EFFECTS[i];
        audio.controls = true;

        const name = document.createElement("p");
        name.textContent = SOUND_EFFECTS[i].slice(19, SOUND_EFFECTS[i].length -4);
        
        const div = document.createElement("div");
        div.appendChild(audio);
        div.appendChild(name);
        galleryContent.appendChild(div);
    }
});


backgroundSoundsButton.addEventListener("click", function(){
    galleryContent.className = "";
    galleryContent.classList.add("gallery-content-background-sounds");
    galleryContent.innerHTML = "";

    // Fisher–Yates keverés
    for (let i = BACKGROUND_SOUNDS.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [BACKGROUND_SOUNDS[i], BACKGROUND_SOUNDS[j]] = [BACKGROUND_SOUNDS[j], BACKGROUND_SOUNDS[i]];
    }

    for (let i = 0; i < BACKGROUND_SOUNDS.length; i++) {
        const audio = document.createElement("audio");
        audio.src = BACKGROUND_SOUNDS[i];
        audio.controls = true;

        const name = document.createElement("p");
        name.textContent = BACKGROUND_SOUNDS[i].slice(23, BACKGROUND_SOUNDS[i].length -4);
        
        const div = document.createElement("div");
        div.appendChild(audio);
        div.appendChild(name);
        galleryContent.appendChild(div);
    }
});




