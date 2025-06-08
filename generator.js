const startButton = document.getElementById("start-button");
const generatorCanvas = document.getElementById("generator-canvas");

startButton.addEventListener("click", function(){
    let iterationCount = document.getElementById("iteration-count").value;
    iterationCount = Number(iterationCount);
    //console.log(iterationCount);

    imagesAndVideosIterator(iterationCount);
});

function imagesAndVideosIterator(x){
    let i = 0;
    while(i < x){
        //console.log(Math.floor(Math.random() * 2));
        //generatorCanvas.innerHTML=`${i}`;
        


        i++;
    }
}