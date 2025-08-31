const callBalance= document.getElementById("call-balance")

document.getElementById("call-btn").addEventListener('click',function(e){
e.preventDefault();

const currentBalance=Number(callBalance)-20;
callBalance= currentBalance;
console.log(callBalance)



})


function copyTheText(){
        const copyitems=document.getElementsByClassName("copy-items").innerText;
        copyitems.select();
        copyitems.setSelectionRang(0,99999);

        navigator.clipboard.writeText(copyitems.value);

        alert(copyitems)
}

function copyTheText() {
      let textFromcopyItems =copyitems=document.getElementsByClassName("copy-items").innerText;
      navigator.clipboard.writeText(textFromcopyItems).then(() => {
        alert( + textFromcopyItems);
      }).catch(() => {
      });
    }