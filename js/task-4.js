let registerForm = document.querySelector(".login-form")
registerForm.addEventListener("submit", submitHandler);
function submitHandler (event){
    event.preventDefault();
    let form = event.target;
    let email = form.elements.email.value;
    let password = form.elements.password.value;

    if(email === "" || password === ""){
        return alert("All form fields must be filled in");
    }

    console.log(`Email: ${email.value}, Password: ${password.value}`);
    form.reset();
}
