let score = JSON.parse( localStorage.getItem("score")) || { 
      
  wins: 0,
  losses: 0,                        // if left === truthy it will use left side else use right
  draws: 0
 };                                    //save score when refreshing page

/*
if (score === null){
 score = {
   wins: 0,                          // same as the right side of the OR operator above
   losses: 0,
   draws: 0
 };

}
*/


updateScoreHTML();


function startGame(playerMove){

         const computerMove = chooseComputerMove();
     console.log(computerMove);
     let result = '';

         if (playerMove === 'Scissors'){
           
           if (computerMove === 'Rock'){
         result = 'You lose';
     }

     else if (computerMove === 'Paper'){
         result = 'You win';
     }

     else if (computerMove === 'Scissors'){
         result = 'Draw';
     }  

 }

         else if (playerMove === 'Paper'){
          
     console.log(computerMove);

   

     if (computerMove === 'Rock'){
         result = 'You win';
     }

     else if (computerMove === 'Paper'){
         result = 'Draw';
     }

     else if (computerMove === 'Scissors'){
         result = 'You lose';
     }

 }

           else if (playerMove === 'Rock'){
         

  

     if (computerMove === 'Rock'){
         result = 'Draw';
     }

     else if (computerMove === 'Paper'){
         result = 'You lose';
     }

     else if (computerMove === 'Scissors'){
         result = 'You win';
     }
 }
 
 if (result === "You win"){
   score.wins ++;
 }
 else if (result === "You lose"){
   score.losses ++;
 }
 else if (result === "Draw"){
   score.draws ++;
 }



 localStorage.setItem("score", JSON.stringify(score));       //storage can only save string, JSON.stringify convets score into a string 


document.querySelector(".js-result")
   .innerHTML = result;


document.querySelector(".js-moves")
 .innerHTML = `You <img src="images/${playerMove}.png" class="moveIcons" alt="emoji" "-">
 
 <img src="images/${computerMove}.png" class="moveIcons" alt="emoji"> Computer`

 updateScoreHTML();
 
} 




function updateScoreHTML(){
 document.querySelector(".js-score")
   .innerHTML = "Wins: " +score.wins + " Losses: " +score.losses + " Draws: " + score.draws;
}





function chooseComputerMove(){
 const randomNumber= Math.random(); 
 let computerMove ='';

if (randomNumber >=0 && randomNumber < 1/3) {
computerMove = 'Rock';
}

else if (randomNumber >=1/3 && randomNumber < 2/3){
computerMove = 'Paper';   
}

else if (randomNumber >= 2/3 && randomNumber <1){
computerMove = 'Scissors';
}


return computerMove;
}
