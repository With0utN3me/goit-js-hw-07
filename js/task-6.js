function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputNumber = document.querySelector(`input[type="number"]`)
const boxWithBoxes = document.querySelector("#boxes");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");


function createBoxes(amount){
  
  if(amount <= 100 && amount >= 1){
    let size = 30;
    for(let i = 1; i <= amount; i++){
    boxWithBoxes.insertAdjacentHTML("beforeend", `<div style="background-color:${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`)
    console.log(i);
    size += 10;
    }
  }
  else {
    alert("Try another number!");
  }
}


function destroyBoxes(){
  boxWithBoxes.innerHTML = "";
}
create.addEventListener("click", () => {
  destroyBoxes();
  createBoxes(Number(inputNumber.value));
  inputNumber.value = "";
})

destroy.addEventListener("click", () => {
  destroyBoxes()
})