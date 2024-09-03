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

/*REALIZAR O LOGIN - ir para a pag principal */
function logar(event){
    event.preventDefault();
    window.location.href = "paginaPrincipal.html";
}

//VALIDAÇÃO DOS BOTÕES
function validacao(){
    const emailValido = isEmailValido();
    document.getElementById('novaSenha').disabled = !emailValido;

    const senhaValida = isSenhaValida();
    document.getElementById('botaoEntrar').disabled = !emailValido || !senhaValida;
}

/*VALIDAR EMAIL*/
function isEmailValido(){
    const email = document.getElementById("emailLogin").value;
    if(!email) {
        return false;
    } 
    return validaEmail(email);
} 
/*VALIDAR SENHA*/
function isSenhaValida(){
    const senha = document.getElementById('senhaLogin').value;
    if(!senha) {
        return false;
    }
    return true;
}

function validaEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


