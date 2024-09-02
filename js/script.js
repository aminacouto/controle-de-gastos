//ANIMAÇÃO TELA DE LOGIN

const btnEntrar = document.querySelector("#btnEntrar");
const btnCadastar = document.querySelector("#btnCadastrar");

const body = document.querySelector('body');

btnEntrar.addEventListener ("click", function(){
    body.className = "entrar-js";
});

btnCadastar.addEventListener ("click", function (){
    body.className = "cadastrar-js";
})


//VALIDAÇÃO DOS BOTÕES

function logar() {
    var login = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if(login == "admin" && senha == "admin") {
        location.href = "paginaInicial.html";
    } else {
        alert ('USUÁRIO OU SENHA INCORRETA')
    }
}