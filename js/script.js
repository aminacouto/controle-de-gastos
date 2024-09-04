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

/*LOGIN */
//VALIDAÇÃO DOS BOTÕES
function validacao() {
    const emailValido = isEmailValido();
    document.getElementById('novaSenha').disabled = !emailValido;

    const senhaValida = isSenhaValida();
    document.getElementById('botaoEntrar').disabled = !emailValido || !senhaValida;
}
/*VALIDAR EMAIL*/
function isEmailValido() {
    const email = form.emailLogin().value;
    if (!email) {
        return false;
    }
    return validaEmail(email);
}
/*VALIDAR SENHA*/
function isSenhaValida() {
    const senha = form.senhaLogin().value;
    if (!senha) {
        return false;
    }
    return true;
}

/*CADASTRO */
// VALIDAÇÃO DOS BOTÕES
function cadastrarUsuario(){
    window.location.href = "../paginaPrincipal"
}
function validacaoCadastro() {
    const emailValido = isEmailCadastroValido();
    const senhaValida = isSenhaCadastroValida();

    document.getElementById('botaoCadastrar').disabled = !emailValido || !senhaValida;
}

/* VALIDAR EMAIL DE CADASTRO */
function isEmailCadastroValido() {
    const email = form.emailCadastro().value;
    if (!email) {
        return false;
    }
    return validaEmail(email);
}

/* VALIDAR SENHA DE CADASTRO */
function isSenhaCadastroValida() {
    const senha = form.senhaCadastro().value;
    if (!senha) {
        return false;
    }
    return true;
}

function validaEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const form = {
    emailLogin: () => document.getElementById("emailLogin"),
    senhaLogin: () => document.getElementById("senhaLogin"),

    emailCadastro: () => document.getElementById("emailCadastrar"),
    senhaCadastro: () => document.getElementById("senhaCadastrar")
}
