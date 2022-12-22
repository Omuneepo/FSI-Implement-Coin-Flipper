// TODO: Declare any global variables we need
let diceRollCount = [0, 0, 0, 0, 0, 0];
let precentRolls = [0, 0, 0, 0, 0, 0];
function updateScoreboard() {
    let totalRolls = 0;
        for (let i = 0; i < diceRollCount.length; i++) {
        totalRolls += diceRollCount[i];
      }
    precentRolls = [0, 0, 0, 0, 0, 0];
        if (totalRolls > 0) {
          for (let i = 0; i < diceRollCount.length; i++) {
            precentRolls[i] = Math.round((diceRollCount[i] / totalRolls) * 100); 
            }
        }
    for (let i = 0; i < diceRollCount.length; i++) {
        document.querySelector(
            "#dice-" + (i+1)+ "-rolls").textContent = diceRollCount[i];
        document.querySelector(
            "#dice-" + (i+1) + "-percent").textContent = precentRolls[i] + "%"; 

    
   }
}
    
    
    
document.addEventListener('DOMContentLoaded', function () {
    let flipButton = document.querySelector('#roll');
     flipButton.addEventListener('click', function() {
        let rolledValue = Math.ceil(Math.random() * 6);

        let dice = document.querySelector('#dice');
        let status = document.querySelector('#status');
         
        dice.src = "assets/images/dice/dice" + rolledValue + ".png";
        status.textContent = "you rolled a " + rolledValue + "!";
        
        diceRollCount[rolledValue-1]++;
    
        updateScoreboard();
                
            
    });
    let clearButton = document.querySelector("#clear");
    clearButton.addEventListener('click', function() {
        diceRollCount = [0, 0, 0, 0, 0, 0];
        precentRolls = [0, 0, 0, 0, 0, 0];

        dice.src = "assets/images/dice/dice1.png";
        dice.alt = "Dice 1";
        status.textContent = "lets get Rolling!";

        updateScoreboard();

    });


})    
    

