//ANIMAÇÃO TELA DE LOGIN
const btnEntrar = document.querySelector("#btnEntrar");
const btnCadastar = document.querySelector("#btnCadastrar");

const body = document.querySelector('body');

btnEntrar.addEventListener("click", function () {
    body.className = "entrar-js";
});

btnCadastar.addEventListener("click", function () {
    body.className = "cadastrar-js";
})

