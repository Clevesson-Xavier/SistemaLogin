let senha = document.getElementById('email');
let password = document.getElementById('password');
let form = document.querySelector("form");
let textForm = document.getElementById('textForm')

form.addEventListener('submit', (e) => {
    if (email.value == '' && password.value == ''){
        textForm.textContent = "Você precisa preencher todos os campos"
    }
    console.log(email.value);
    console.log(password.value);
    e.preventDefault()
})