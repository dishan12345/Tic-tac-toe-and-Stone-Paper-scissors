let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;
let count=0;
let totalGame=0;
let a=0;
let b=0;
let total=document.querySelector("#TOTAL");
let mA=document.querySelector("#multiA");
let mB=document.querySelector("#multiB");
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turn0=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((bx)=>{ 
    bx.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0)
            {
                bx.innerText="O";
                turn0=false;
            }
            else{
                bx.innerText="X";
                turn0=true;
            }
            bx.disabled=true;
            count++;
            let isWinner=checkWinner();
            console.log(isWinner, "hello");
            if(count===9 && !isWinner)
                {
                    gameDraw();
                }
    });
});
const gameDraw=()=>{
    msg.innerText="Game was a draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
    totalGame++;
    total.innerText=`Total Games: ${totalGame}`;
};
const disableBoxes=()=>
    {
        for(let box of boxes)
            {
                box.disabled=true;
            }
        
    };
    const enableBoxes=()=>{
        for(let box of boxes)
            {
                box.disabled=false;
                box.innerText="";
            }
    };
const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    if(winner==='O')
        {
            a++;
            mA.innerText=`Games Player O is wining:${a}`;
        }
        if(winner==='X')
            {
                b++;
                mB.innerText=`Games Player X is wining:${b}`;
            }
    msgContainer.classList.remove("hide");
    disableBoxes();

}
checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!=""&& pos2Val!="" && pos3Val!="")
            {
                if(pos1Val===pos2Val&&pos2Val===pos3Val)
                    {
                        console.log("winner",pos1Val);
                        showWinner(pos1Val);
                        totalGame++;
                        total.innerText=`Total Games: ${totalGame}`;
                    }
            }
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);