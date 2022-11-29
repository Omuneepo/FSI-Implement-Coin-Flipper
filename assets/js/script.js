// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {

    document.addEventListener('DOMContentLoaded', function () {
        let flipButton = document.querySelector('#flip');
        flipButton.addEventListener('click', function() {
            let randomNumber = math.random();
        })
    }
    )
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        let isHeads = true
        if (randomNumber < 0.50){
            isHeads = False;
        }
        // TODO: Update image and status message in the DOM
        let coin = document.querySelector('#coin');
        let status = document.querySelector('#status');

        if (isHeads) {
            coin.src = "assets/ images/penny-heads.jpg";
            coin.alt = "penny (heads side)";
            status.textContext = "you flipped a heads!";
            headsFlipcount++;
        } else {
            coin.src = "assets/images/penny-tail.jpg"
            coin.alt = "penny (tails side)"
            status.textContent = "you flipped a tails!"
            tailFlipcount++;
        }

        // Update the scorboard 
        // TODO: Calculate the total number of rolls/flips
        let totalFlip = headsFlipcount + tailFlipcount; 

        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
     
        let precentHeads = headsFlipcount / totalFlipcount;
        let precentTails = tailFlipcount / totalFlipcount;


        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell
        document.querySelector("#heads").textContent = headsFlipcount;
        document.querySelector("#heads-precent").textContent = precentHeads
        document.querySelector("#tails").textContent = tailFlipcount
        document.querySelector("#tails-precent").textContent = precentTails


    // Clear Button Click Handler
    let clearButton = document.querySelector("#clear");

        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})