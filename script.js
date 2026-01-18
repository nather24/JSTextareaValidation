
var textMessage=document.getElementById("textMessage")

var txtCount=document.getElementById("txtCount")

var btnsubmit=document.getElementById("btnSubmit")
var errorMsg=document.getElementById("errorMsg")

const actualCount=200

textMessage.addEventListener("input", function(event) {
event.preventDefault();
const currentlength=event.target.value.length;

if (currentlength >=actualCount)
errorMsg.innerHTML="You entering more than 200 char"
else
errorMsg.innerHTML=""

txtCount.textContent=currentlength+"/"+actualCount;
})

btnsubmit.addEventListener("click", function(event){
event.preventDefault();
if(textMessage.value.length >=actualCount)
errorMsg.innerHTML="You entering more than 200 char"
else
errorMsg.innerHTML=""
})