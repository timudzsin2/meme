import { IMAGES } from "./imagesArray.js";
import { VIDEOS } from "./videosArray.js";
import { SOUNDS } from "./soundsArray.js";
import { BSOUNDS } from "./bsoundsArray.js";

const imagesButton = document.getElementById("images-button");
const videosButton = document.getElementById("videos-button");
const soundsButton = document.getElementById("sounds-button");
const bSoundsButton = document.getElementById("b-sounds-button");

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
        galleryContent.appendChild(video);
    }
});


soundsButton.addEventListener("click", function(){
    galleryContent.className = "";
    galleryContent.classList.add("gallery-content-sounds");
    galleryContent.innerHTML = "";

    // Fisher–Yates keverés
    for (let i = SOUNDS.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [SOUNDS[i], SOUNDS[j]] = [SOUNDS[j], SOUNDS[i]];
    }

    for (let i = 0; i < SOUNDS.length; i++) {
        const audio = document.createElement("audio");
        audio.src = SOUNDS[i];
        audio.controls = true;
        galleryContent.appendChild(audio);
    }
});

