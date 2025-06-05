import { IMAGES } from "./images.js";

const imagesButton = document.getElementById("images-button");
const videosButton = document.getElementById("videos-button");
const soundsButton = document.getElementById("audios-button");

const galleryContent = document.getElementById("gallery-content");

imagesButton.addEventListener("click", function(){
    galleryContent.classList.remove;
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