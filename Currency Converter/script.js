// function to update exchange rate
const updateExchangeRate= async()=>{
    let val=amt.value;
    if (val==="" ||val <1){
        val=1;
        amt.value ="1";
    }
    const url =`${Base_url}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(url);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    msg.innerText=`${amt.value} ${fromCurr.value} = ${amt.value*rate} ${toCurr.value}`
    
}
// function to update flags on selecting
const updateFlag=(element)=>{
    let currcode=element.value;
    let countryCode=countryList[currcode];
    let newSrc= `https://flagsapi.com/${countryCode}/flat/64.png`;
    let image= element.parentElement.querySelector("img")
    image.src=newSrc;
}

// element declaration 
const Base_url ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const btn =document.querySelector("form button");

const dropdown= document.querySelectorAll(".dropdown select");

const fromCurr =document.querySelector(".from select");

const amt = document.querySelector(".amount input");

const toCurr =document.querySelector(".to select");

const msg=document.getElementById("Exchange");

// adding all options from getComputedStyle.js 
for (let select of dropdown){
    for (currcode in countryList){
        let newOption =document.createElement("option");
        newOption.innerText=currcode;
        newOption.value=currcode;
        if (select.name==='from'&& currcode==='USD'){
            newOption.selected="selected";   
        }
        else if(select.name==='to'&& currcode==='INR'){
            newOption.selected="selected";   
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
        
    })
    
}

// button event listener 
btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    updateExchangeRate();
})

//  fetch latest rate at the starting of the page 
window.addEventListener("load", ()=>{
    updateExchangeRate();
})
