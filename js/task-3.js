let textInput = document.querySelector("#name-input");
let textOutput = document.querySelector("#name-output");
textInput.addEventListener("input", (event) => { if (event.currentTarget.value.trim() !== "") {
    textOutput.textContent = event.currentTarget.value.trim();
}
else if(event.currentTarget.value === "") {
    textOutput.innerHTML = "Anonymous";
}
});
