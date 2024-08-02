let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new-btn");
let message = document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let turnO = true; //playerX, playerO

let winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked.");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

let disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

let enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

let showWinner =(Winner) =>{
    msg.innerText="Congratulations, Winner is " + Winner;
    message.classList.remove("hide");
    disableBoxes();
};

//arrowFunction
let checkWinner=()=>{
    for(pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText; 
        let pos3val = boxes[pattern[2]].innerText;
        
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val===pos2val&&pos2val===pos3val){
                console.log("Winner " + pos1val);
                showWinner(pos1val);
            }
        }
    }
};

let resetgame=()=>{
    turnO=true;
    enableBoxes();
    message.classList.add("hide");
};

newBtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);