
// get input value 
function getInputValue (id){
    const inputField=document.getElementById(id)
    const inputFieldValue= inputField.value
    return inputFieldValue;
}

// get input inner text

function getInnerText(id){
    const element =document.getElementById(id)
    const elementValue=element.innerText
    const elementValueNumber= parseInt(elementValue)
    return elementValueNumber
}


// set innerText 
function setInnerText(value){
    const avalaivalBalace=document.getElementById("call-balance")
    avalaivalBalace.innerText= value;
}

function setInnerTextforheart(value){
    const avalaivalBalace=document.getElementById("heart-balance")
    avalaivalBalace.innerText= value;
}


function setInnerTextforCopyBtn(value){
    const avalaivalBalace=document.getElementById("copy-balance")
    avalaivalBalace.innerText= value;
}
// const balance=parseInt(document.getElementById("call-balance").innerText)
const balance=getInnerText("call-balance")
const perCallCharge=20


let callBtn=document.getElementsByClassName("call-btn")
const detailsCallAlert=document.getElementById("details-call-alert").innerText
const numForCallAlert=document.getElementById("num-for-call-alert").innerText


for( let button of callBtn){
    button.addEventListener("click",function(){
         
          alert("Calling " + " "  + detailsCallAlert + " "  + numForCallAlert);

        let currentBalance= getInnerText("call-balance")
        if(currentBalance >=perCallCharge){
          currentBalance -= perCallCharge;
          setInnerText(currentBalance)
         




        }




        else{
            alert("Insufficient balance! At least 20 coins are required to make a call.");
        }






const callHistoryContainer=document.querySelector(".call-history-container")
const newCartCreat=document.createElement("div");
const clearBtn=document.querySelector(".clear-button").addEventListener("click",function(){
   callHistoryContainer.innerHTML= " "; 
 })

 
 newCartCreat.innerHTML=`
             <div class=" bg-slate-100 rounded-md items-center px-6 m-5 flex justify-between" >
                <div>
                    <h1 class="font-bold">Fire Service Number </h1>
                    <h2>999</h2>
                </div>
                <div>
                    <p>11:36:58</p>
                </div>

            </div>
 `
  
 callHistoryContainer.appendChild(newCartCreat)

 

    })
   
}

// javascript code for heart button 

let heartBtn=document.getElementsByClassName("heart-btn")
for( let button of heartBtn){
    button.addEventListener("click",function(){
      let currentHeartBalance=getInnerText("heart-balance");
      currentHeartBalance++;
      setInnerTextforheart(currentHeartBalance)



    })

   
}


function getbtnfrombtns(id){
let btnitems=document.getElementsByClassName("copy-btn")
for(let btn of btnitems){
    
}

return btn
}

// javascript code for copy past button 
let copyBtn=document.getElementsByClassName("copy-btn")
for(let button of copyBtn){
button.addEventListener("click",function copyTheText() {
      let currentcopybalance=document.getElementById("copy-balance").innerText
      currentcopybalance++;
      setInnerTextforCopyBtn(currentcopybalance)
      let textFromcopyItems =document.querySelector(".copy-items").innerText
      navigator.clipboard.writeText(textFromcopyItems).then(() => {
        alert("Number copied to clipboard - "+ textFromcopyItems);
      }).catch(() => {
      });
    })
}


// store call history sectiion 

