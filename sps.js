let userScore=0;
let compScore=0;
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("comp-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result>p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getCompChoice(){
    const choices=['r','p','s'];
    const randomNumber=(Math.floor(Math.random()*3));
    return choices[randomNumber];
    }
    function convertToWord(letter){
        if(letter==="r") return "Rock";
        if(letter==="p") return "Paper";
        return "Scissors";

    }
    function win(userChoice,compChoice){
        const userChoice_div= document.getElementById(userChoice);
        userScore++;
        userScore_span.innerHTML=userScore;
        compScore_span.innerHTML=compScore;
        result_p.innerHTML=convertToWord(userChoice)+ " beats " +convertToWord(compChoice)+".YOU WIN!";
        userChoice_div.classList.add('green-glow');   
        setTimeout(function(){userChoice_div.classList.remove('green-glow')},500) ;
    }
    function lose(userChoice,compChoice){
        const userChoice_div= document.getElementById(userChoice);
        compScore++; 
        userScore_span.innerHTML=userScore;
        compScore_span.innerHTML=compScore;
        result_p.innerHTML= convertToWord(userChoice)+ " loses to " +convertToWord(compChoice)+".YOU LOST!";
        userChoice_div.classList.add('red-glow');  
        setTimeout(function(){userChoice_div.classList.remove('red-glow')},500) ;      
}
    function draw(userChoice,compChoice){
        const userChoice_div= document.getElementById(userChoice);
    result_p.innerHTML= convertToWord(userChoice)+ " equals " +convertToWord(compChoice)+".IT'S A DRAW!";
    userChoice_div.classList.add('yellow-glow');  
    setTimeout(function(){userChoice_div.classList.remove('yellow-glow')},500) ;   
}
   
function game(userChoice){
   const compChoice=getCompChoice();
   switch(userChoice+compChoice){
       case "rs":
       case "pr":
       case "sp":
          win(userChoice,compChoice);
           break;
       case "rp":
       case"ps":
       case"sr":
         lose(userChoice,compChoice);
         break;
         case "rr":
            case"pp":
            case"ss":
              draw(userChoice,compChoice);
              break;
   }

}

function main(){


rock_div.addEventListener('click',function() {
    game("r");
})
    paper_div.addEventListener('click',function() {
        game("p"); 
    })
        scissor_div.addEventListener('click',function() {
            game("s");
        })
    }
    main();
                








