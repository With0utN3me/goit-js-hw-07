const loginForm = document.querySelector(".login-form")
loginForm.addEventListener("submit", submitHandler);

function submitHandler (event){
    event.preventDefault();
    let form = event.target;
    let email = form.elements.email.value.trim();
    let password = form.elements.password.value.trim();

    if(email === "" || password === ""){
        return alert("All form fields must be filled in");
    }
    const userData = {
        userEmail: email,
        userPass: password,
    };
    console.log(userData);
    form.reset();
}
