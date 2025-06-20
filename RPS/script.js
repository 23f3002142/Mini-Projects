let userscore = 0;
let compscore = 0;
const user= document.querySelector("#userscore");
const comp= document.querySelector("#compscore");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");



const gencompchoice = () =>{
    const options = ["rock","paper","scissors"];
    const randomID = Math.floor(Math.random() * 3);
    return options[randomID];
}; 

const drawgame = () =>{
    msg.innerText = "The Game is drawn , Play again";
};
const showwinner = (userwin, userchoice, compchoice) =>{
    if(userwin){
        userscore++;
        user.innerText = userscore;
        msg.innerText = `You win, your ${userchoice} beats ${compchoice}`;
        
    } else {
        compscore++;
        comp.innerText = compscore;
        msg.innerText = `you loose. your ${userchoice} get beated by ${compchoice}`;
    }
};


const playgame = (userchoice)=> {
    const compchoice = gencompchoice();

    if (userchoice === compchoice){
        // its a draw
        drawgame();
    } else {
        let userwin=true;
        if(userchoice === "rock"){
            userwin = compchoice=== "paper" ? false : true;
        } else if(userchoice === "paper"){
            userwin = compchoice=== "scissors" ? false : true;
        } else {
            userwin = compchoice=== "rock" ? false : true;
        }
        showwinner(userwin , userchoice , compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});


