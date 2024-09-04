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

//VALIDAÇÃO DOS BOTÕES
function validacao() {
    const emailValido = isEmailValido();
    document.getElementById('novaSenha').disabled = !emailValido;

    const senhaValida = isSenhaValida();
    document.getElementById('botaoEntrar').disabled = !emailValido || !senhaValida;
}

/*VALIDAR EMAIL*/
function isEmailValido() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validaEmail(email);
}
/*VALIDAR SENHA*/
function isSenhaValida() {
    const senha = form.senha().value;
    if (!senha) {
        return false;
    }
    return true;
}

function validaEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


const form = {
    email: () => document.getElementById("emailLogin"),
    senha: () => document.getElementById("senhaLogin"),
}


/***************************************************/
/*import { register, login } from './firebase.js';

// Função de login
document.getElementById('botaoEntrar').addEventListener('click', function(event) {
    event.preventDefault();
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('senhaLogin').value;

    login(email, password)
        .then((userCredential) => {
            alert('Login realizado com sucesso!');
            // Aqui você pode redirecionar ou fazer outras ações
        })
        .catch((error) => {
            document.getElementById('erro').innerText = 'Email ou senha incorretos';
        });
});

// Função de cadastro
document.querySelector('.formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('senha').value;

    register(email, password)
        .then((userCredential) => {
            alert('Cadastro realizado com sucesso!');
            // Aqui você pode redirecionar ou fazer outras ações
        })
        .catch((error) => {
            alert('Erro ao cadastrar: ' + error.message);
        });
});*/