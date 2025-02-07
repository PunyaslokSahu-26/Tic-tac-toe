let boxes =document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let winner=document.querySelector(".winner");
let msg= document.querySelector("#msg");
let msg2= document.querySelector(".msg-c");

let turn0=true;
let tie=true;

const resetgame = () =>{
    turn0=true;
    enableboxes();
    msg2.classList.add("hide");
}

const enableboxes=() =>{
    for( let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
} 
const disableboxes=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
} 

let winpatrns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="X";
            turn0=false;
        }
        else{
            box.innerText="O";
            turn0=true;
        }
        box.disabled=true;
        winnercheck();
    });
});
const winnercheck =() =>{
    for( partrn of winpatrns){
        let pos1=boxes[partrn[0]].innerText;
        let pos2=boxes[partrn[1]].innerText;
        let pos3=boxes[partrn[2]].innerText;
        if(pos1!=""&& pos2!=""&& pos3!=""){
            if(pos1==pos2&&pos2==pos3){
                console.log("winner is",pos1);
                showwinner(pos1);
            }
        }
    }
}
// if(tie){
//     msg.innerText="its a Tie";
//     msg2.classList.remove("hide");
// }
const showwinner = (winner) =>{
    msg.innerText=`winner is${winner}`;
    msg2.classList.remove("hide");
    disableboxes();
}
reset.addEventListener("click",resetgame);