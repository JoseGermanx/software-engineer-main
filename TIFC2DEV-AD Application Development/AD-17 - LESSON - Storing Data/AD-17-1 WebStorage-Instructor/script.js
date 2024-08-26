function writeTxt() {
    message = document.querySelector("#msg")
    message.innerText = textbox.value
}
  
  
  
function saveMsg() {
  
    writeTxt()
}
  
const textbox = document.querySelector("#txt")
const button = document.querySelector("#btn")
button.addEventListener("click", saveMsg)