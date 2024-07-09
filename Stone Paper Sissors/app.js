let total=0;
let player1counter=0;
let player2counter=0;
function myFunction(){
let arr=["st",'p',"sc"];
let p1=document.getElementById("choice").value;
let p2=arr[Math.floor(Math.random()*3)];
let totalg=document.querySelector("#total");
let player1=document.querySelector("#player1");
let player2=document.querySelector("#player2");

if(p1==="st"){
    if(p1===p2)
        {
            console.log("its a draw!!");
            console.log("computer choosed stone");
            total++;
            totalg.innerText=`Total Games Played:${total}`;
            
        }
        else if(p2==='p'){
                console.log("Paper is winner");
                console.log("computer choosed paper");
                total++;
            totalg.innerText=`Total Games Played:${total}`;
            console.log("Computer winned");
            player2counter++;
            player2.innerText=`Computer winned:${player2counter}`;
                
        }
        else{
            console.log("Stone is winner");
            console.log("computer choosed scissors");
            total++;
            totalg.innerText=`Total Games Played:${total}`;
            console.log("Player 1 winned");
            player1counter++;
            player1.innerText=`Player 1 winned:${player1counter}`;
            
        }
}
else if(p1==='p'){
    if(p2==="st"){
        console.log("Paper is winner");
        console.log("computer choosed stone");
        total++;
        totalg.innerText=`Total Games Played:${total}`;
        console.log("player 1 winned");
        player1counter++;
        player1.innerText=`Player 1 winned:${player1counter}`;

    }
    else if(p2==='p'){
        console.log("Its a draw");
        console.log("computer choosed paper");
        total++;
        totalg.innerText=`Total Games Played:${total}`;
    }
    else{
        console.log("Scissors is winner");
        console.log("computer choosed scissors");
        total++;
        totalg.innerText=`Total Games Played:${total}`;
        console.log("Computer winned");
        player2counter++;
        player2.innerText=`Computer winned:${player2counter}`;

    }
}
else if(p1==="sc"){
    if(p2==="st"){
        console.log("stone is the winner");
        console.log("computer choosed stone");
        total++;
        totalg.innerText=`Total Games Played:${total}`;
        console.log("Computer winned");
        player2counter++;
        player2.innerText=`Computer winned:${player2counter}`;

    }
    else if(p2==="sc"){
        console.log("scissors is the winner");
        console.log("computer choosed paper");
        total++;
        totalg.innerText=`Total Games Played:${total}`;
        console.log("player 1 winned");
        player1counter++;
        player1.innerText=`Player 1 winned:${player1counter}`;

    }
    else{
        console.log("Its a draw");
        console.log("computer choosed scissors");
        total++;
        totalg.innerText=`Total Games Played:${total}`;
    }
}
else{
    console.log("invalid entry!!");
}
}
