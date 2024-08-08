// <-------------------------------------bot response------------------------------------------------------->
const bot_response = function (){
     let numb =Math.floor(Math.random()*3);
    return mylist[numb]
}
// <------------------------------------------Winner chekker-------------------------------------------------->
const checkwinner =function(uchoice,bchoice){
    if (uchoice==bchoice){
        return 3; //draw
    }
    else if (uchoice=="rock"){
        if (bchoice=="scissor"){
            return 1; //1 =user won 
        }
        else{
            return 0 // 0=bot won
        }
    }
    else if (uchoice=="paper"){
        if (bchoice=="rock"){
            return 1; //1 =user won 
        }
        else{
            return 0 // 0=bot won
        }
    }
    else if (uchoice=="scissor"){
        if (bchoice=="paper"){
            return 1; //1 =user won 
        }
        else{
            return 0 // 0=bot won
        }
    }

}

// <--------------------------------------------variables------------------------------------------------>


var choices=document.querySelectorAll(".choice");
var user_score=document.getElementById("user-score");
var bot_score=document.getElementById("bot-score");
var msg=document.getElementById("msg");
const mylist=["rock","paper","scissor"];
let newGameBtn=document.getElementById("Reset-all");
var u=0;
var b=0;
// <-------------------------------------main code------------------------------------------------------->

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        console.log("Boxed was clicked");
        let user_choice=choice.id;
        console.log(user_choice);
        let bot_choice=bot_response();
        console.log(bot_choice);
        let won =checkwinner(user_choice,bot_choice);
        if (won==1){
            u+=1;
            user_score.innerHTML=u
            msg.innerText="You Won"
        }
        else if(won==0){
            b+=1;
            bot_score.innerHTML=b;
            msg.innerText="I won"
        }
        else{
            msg.innerText=" It's a Draw"
        }
    })
})
// <------------------------------------------reset game function------------------------------------------------->
// 
const resetGame= () =>{
    u=0;
    b=0;
    msg.innerText="Play your move ";
    user_score.innerHTML=0;
    bot_score.innerHTML=0;
}
// <----------------------------------------------buttons code ---------------------------------------------->
// 
newGameBtn.addEventListener("click",resetGame);