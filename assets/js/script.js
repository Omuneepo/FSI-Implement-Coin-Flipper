// TODO: Declare any global variables we need
let headsFlip = 0;
let tailsFlip = 0;

function updateScoreboard() {
    let totalFlipCount = headsFlip + tailsFlip; 
    let percentHeads = 0;
    let percentTails = 0;
    if (totalFlipCount > 0) {
      percentHeads = Math.round((headsFlip / totalFlipCount) * 100);
      percentTails = Math.round((tailsFlip / totalFlipCount) * 100);

   }
    
    document.querySelector("#heads").textContent = headsFlip;
    document.querySelector("#heads-percent").textContent = percentHeads + "%";
    document.querySelector("#tails").textContent = tailsFlip;
    document.querySelector("#tails-percent").textContent = percentTails + "%";
}  

document.addEventListener('DOMContentLoaded', function () {
    let flipButton = document.querySelector('#flip');
        flipButton.addEventListener('click', function() {
            let randomNumber = Math.random();
            let isHeads = true;
            if (randomNumber >0.5) {
                isHeads= false;
             }
        let coin = document.querySelector('#coin');
        let status = document.querySelector('#status');

        if (isHeads) {
            coin.src = "assets/images/penny-heads.jpg";
            coin.alt = "penny (heads side)";
            status.textContent = "you flipped heads!";
            headsFlip++;
            } else {
            coin.src = "assets/images/penny-tails.jpg"
            coin.alt = "penny (tails side)"
            status.textContent= "you flipped tails!";
            tailsFlip++;
            }
            updateScoreboard();
            
            
    });
    let clearButton = document.querySelector("#clear");
    clearButton.addEventListener('click', function() {
        headsFlip = 0;
        tailsFlip = 0;

        let coin = document.querySelector('#coin');
        let status = document.querySelector('#status');

        coin.src = "assets/images/penny-heads.jpg";
        coin.alt = "penny (heads side)";
        status.textContent = "lets get flipped!";

        updateScoreboard();

    });


})    
    

