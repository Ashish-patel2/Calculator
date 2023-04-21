  console.log("welcom in my tic tac toe game")
let music = new Audio ()
let tune = new Audio ("button.mp3")
let gameover  = new Audio ()
let turn = "x" ;

//fun to change turn
const changeturn=()=>{
     return turn === "x"? "0":"x"
}
// check for a win &&
const checkwin =()=>{
        let win=[
        [1,2,3] 
        [4,5,6]
        [7,8,9]
        [1,5,9]
        [3,5,7]
        [1,4,7]
        [2,5,8]
        [3,6,9]
        
        ]
        
}
//logic to win
let boxes = document.getElementsByClassName("box");
Array.from (boxes).forEach(element=>
{
   let boxtext = element.querySelector(".boxtext"); 
   element. addEventListener('click', ()=>
   {
           if (boxtext.innerText === ''){
             boxtext.innerText= turn  ;
             turn =changeturn();
             adioTurn.play();
             checkwin();
   document.getElementsByClassName("info")[0].innerText="turn for "+turn;
                   
           } }  )
}) 
