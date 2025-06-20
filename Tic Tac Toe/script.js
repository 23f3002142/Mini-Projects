let boxes = document.querySelectorAll(".box");
let resetgamebtn = document.querySelector("#reset");
let newgamebtn=document.querySelector("#newgamebtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;

const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];



const boxenable = () =>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const boxdisable = ()=> {
    for (let box of boxes){
        box.disabled=true;
        box.innerText="";
    }
};

const newgame = () => {
    turn0 = true;
    boxenable();
    msgcontainer.classList.add("hide");
};



boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        } else {
            box.innerText="X";
            turn0=true;
        }
        box.disabled = true;

        check_winner();
    })
});



const showwinner = (winner) => {
    msg.innerText = ` Congratulation , Winner is ${winner}`
    msgcontainer.classList.remove("hide");
    boxdisable();
};


const check_winner = () => {
    for (let pattern of winpattern){
        let val1= boxes[pattern[0]].innerText;
        let val2= boxes[pattern[1]].innerText;
        let val3= boxes[pattern[2]].innerText;

        if(val1 !="" && val2 !="" && val3 !=""  ){
            if(val1 === val2 && val2 === val3){
                showwinner(val1);
            }
        }
    }
};

newgamebtn.addEventListener("click",newgame);
resetgamebtn.addEventListener("click",newgame);