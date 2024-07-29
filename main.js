let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.querySelector("form");
let textForm = document.getElementById('textForm');
let textEmail = document.getElementById("textEmail");
let textPassword = document.getElementById("textPassword");

form.addEventListener('submit', (e) => {
    if (email.value == '' && password.value == ''){
        textForm.textContent = "Você precisa preencher todos os campos."
    }else if(validatorEmail(email.value)=== true && validatorPassword(password.value) === true){
        console.log(email.value);
        console.log(password.value);
        alert("Dados Validados! Bem Vindo!")
        textForm.textContent = "";
        textEmail.textContent="";
        textPassword.textContent= "";
    }else{
        console.log("Requisição Não Atendida!");
    }
    e.preventDefault()
})

email.addEventListener("keyup",() => {
    if(validatorEmail(email.value) !== true ){
        textEmail.textContent= "O formato do email deve ser Ex: abs@email.com"
    }else{
        textEmail.textContent="";
    }
})

password.addEventListener("keyup", () => {
    if(validatorPassword(password.value) !== true){
        textPassword.textContent="A senha precisar conter no mínimo 6 caracteres, caractere especial,letra maiuscula e numero.";
    }else{
        textPassword.textContent = "";
    }
})

function validatorEmail(email){
    //Criando exressão reguldar para validar email
    let emailPattern= /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email)
}

function validatorPassword(password){
    //criando expressão reguldar para validar senha
    let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return passwordPattern.test(password);
}