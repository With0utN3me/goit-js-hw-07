function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount){
  
  if(amount <= 100 && amount >= 1){
    let markup = 30 + 10 * amount;
    for(let i = 1; i <= amount; i++){
    markup -= 10;
    boxWithBoxes.insertAdjacentHTML("afterbegin", `<div style="background-color:${getRandomHexColor()}; width: ${markup}px; height: ${markup}px;"></div>`)
    console.log(i);
    }
  }
  else {
    boxWithBoxes.insertAdjacentHTML("afterbegin", "Try another number!");
  }
}
let inputNumber = document.querySelector(`input[type="number"]`)
let boxWithBoxes = document.querySelector("#boxes");
let create = document.querySelector("[data-create]");
let destroy = document.querySelector("[data-destroy]");


create.addEventListener("click", () => {
  boxWithBoxes.innerHTML = "";
  createBoxes(Number(inputNumber.value));
  inputNumber.value = "";
})




destroy.addEventListener("click", () => {
  boxWithBoxes.innerHTML = "";
})