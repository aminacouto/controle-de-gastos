import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const auth = getAuth();

function verificarCampos() {
    const emailLogin = document.getElementById("emailLogin");
    const senhaLogin = document.getElementById("senhaLogin");
    const botao = document.getElementById("botaoEntrar");

    const emailCadastrar = document.getElementById("emailCadastrar");
    const senhaCadastrar = document.getElementById("senhaCadastrar");
    const botaoCadastrar = document.getElementById("botaoCadastrar");

    if (emailLogin && senhaLogin && botaoEntrar) {
        if (emailLogin.value === "" || senhaLogin.value === "") {
            botaoEntrar.disabled = true;
        } else {
            botaoEntrar.disabled = false;
        }
    }

    if (emailCadastrar && senhaCadastrar && botaoCadastrar) {
        if (emailCadastrar.value === "" || senhaCadastrar.value === "") {
            botaoCadastrar.disabled = true;
        } else {
            botaoCadastrar.disabled = false;
        }
    }
}

export function cadastrarUsuario() {
    const email = document.getElementById("emailCadastrar").value;
    const senha = document.getElementById("senhaCadastrar").value;

    if (email === '' || senha === "") {
        alert("Por favor, preencha todos os campos para realizar o cadastro.");
        return;
    }

    createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            window.location.href = "../paginaPrincipal.html"
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert("Erro no cadastro: " + errorMessage);
        });
};


export function login() {
    const email = document.getElementById("emailLogin").value;
    const senha = document.getElementById("senhaLogin").value;
    const span = document.getElementById("erro");
    const inputEmail = document.getElementById("emailLogin");
    const inputSenha = document.getElementById("senhaLogin");

    if (email === "" || senha === "") {
        span.style.display = "block";
        inputEmail.style.border = "1px solid red";
        inputSenha.style.border = "1px solid red";
        return
    };

    signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            window.location.href = "../emBreve.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            span.style.display = "block";
            inputEmail.style.border = "1px solid red";
            inputSenha.style.border = "1px solid red";
        });
}

document.querySelector(".formulario").addEventListener("submit", cadastrarUsuario);
document.querySelector(".formulario").addEventListener("submit", login);

//  verificar os campos sempre que o usuário digitar
document.getElementById("emailLogin").addEventListener("input", verificarCampos);
document.getElementById("senhaLogin").addEventListener("input", verificarCampos);

document.getElementById("emailCadastrar").addEventListener("input", verificarCampos);
document.getElementById("senhaCadastrar").addEventListener("input", verificarCampos);
verificarCampos();