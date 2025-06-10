export class GeneratorBackgroundSound{

    constructor(filePath){
        this.filePath = filePath;
        this.play();
    }

    play(){
        let backgroundSound = new Audio(BACKGROUND_SOUNDS[x]);
            backgroundSound.volume = 0.4;
            backgroundSound.play();
            console.log(BACKGROUND_SOUNDS[x].slice(23) + "  -  playing");
    }
}