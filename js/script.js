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


function cadastrarUsuario() {
    /*const nome = document.getElementById("nome").value;
    const email = document.getElementById("emailCadastrar").value;
    const senha = document.getElementById("senhaCadastrar").value;

    if (nome === '' || email === '' || senha === "") {
        alert("Por favor, preencha todos os campos antes de continuar.")
    } else {
        window.location.href = "../paginaPrincipal.html"
    }*/
    window.location.href = "../paginaPrincipal.html"
};

function login() {
    /*const emailLogin = document.getElementById("emailLogin").value;
    const senhaLogin = document.getElementById("senhaLogin").value;
    if (emailLogin === "" || senhaLogin === "") {
        alert("Por favor, preencha todos os campos antes de continuar.");
    } else {
        window.location.href = "../paginaPrincipal.html"
    };*/
    window.location.href = "../paginaPrincipal.html"
}
