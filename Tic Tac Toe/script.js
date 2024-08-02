// <-------------------------------------------function to chek winner-----------------------------------------------> 
const checkwinner =()=>{
    for (let pattern of winning){
        let p1value =boxs[pattern[0]].innerHTML;
        let p2value =boxs[pattern[1]].innerHTML;
        let p3value =boxs[pattern[2]].innerHTML;

        if (p1value !="" && p2value !="" && p3value !=""){
            if(p1value==p2value && p2value== p3value){
                if (turnLife ==true){
                    ShowWinner("Life is the Winner ");
                    count--;
                }
                else{
                    ShowWinner("Death Won");
                    count--;//this is for count to not go to 9
                }
                    
            }
        }
        
    } 
    count++;
    if(count==9){
        ShowWinner("Draw");
    }
}
// <--------------------------------------Function to disable buttons ------------------------------------------------------------->
//  
const disableButtons =() =>{
    for (let b of boxs){
        b.disabled =true;
    }
}
// <--------------------------------------Function to disable buttons--------------------------------------------------------->
//  
const enableButtons =() =>{
    for (let b of boxs){
        b.disabled =false;
        if (b.innerHTML==death){
            b.classList.remove("skull");
        }
        else if(b.innerHTML==life){
            b.classList.remove("star");
        }
        b.innerHTML="";

    }
}
// <------------------------------------------reset game function------------------------------------------------->
// 
const resetGame= () =>{
    turnLife= true;
    enableButtons();
    msg.classList.add("hidden");
    count=0;
    
}
// <------------------------------------------function to show winner div -------------------------------------------->
// 
const ShowWinner=(w) =>{
    disableButtons();
    win_msg.innerText=w;
    msg.classList.remove("hidden");
    
}
// <--------------------------------------------------game code ------------------------------------------------>
//  
const rset=document.getElementById("Reset");
let boxs=document.querySelectorAll(".box");
let newGameBtn=document.getElementById("Reset-all");
let msg=document.getElementById("msg");
let win_msg=document.getElementById("winner");
var count =0;
var turnLife= true; //player x ,o 
const death = `<i class="fa-solid fa-skull"></i>`
const life = `<i class="fa-solid fa-star"></i>`
let winning =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]     
];

// function to play the game 

boxs.forEach((box)  => {
    box.addEventListener("click",()=>{
        const list =box.classList;
        if (turnLife==true){
            box.innerHTML=death;
            list.add("skull");
            turnLife=false;            
        }
        else{
            box.innerHTML=`<i class="fa-solid fa-star"></i>`;
            list.add("star");
            turnLife =true
        }
        box.disabled = true; //disabled the clicked box

        checkwinner();
    });
});
// <----------------------------------------------buttons code ---------------------------------------------->
// 
newGameBtn.addEventListener("click",resetGame);
rset.addEventListener("click",resetGame);
 