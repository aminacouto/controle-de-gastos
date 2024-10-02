/*import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// Inicializa a autenticação do Firebase
const auth = getAuth(); */

// Função que verifica se os campos de login e cadastro estão preenchidos e habilita/desabilita os botões correspondentes
function verificarCampos() {
    const emailLogin = document.getElementById("emailLogin");
    const senhaLogin = document.getElementById("senhaLogin");
    const botaoEntrar = document.getElementById("botaoEntrar");

    const emailCadastrar = document.getElementById("emailCadastrar");
    const senhaCadastrar = document.getElementById("senhaCadastrar");
    const botaoCadastrar = document.getElementById("botaoCadastrar");

    // Verifica se os campos de login estão preenchidos, se não, desabilita o botão
    if (emailLogin && senhaLogin && botaoEntrar) {
        if (emailLogin.value === "" || senhaLogin.value === "") {
            botaoEntrar.disabled = true;
        } else {
            botaoEntrar.disabled = false;
        }
    }
    // Verifica se os campos de cadastro estão preenchidos, se não, desabilita o botão
    if (emailCadastrar && senhaCadastrar && botaoCadastrar) {
        if (emailCadastrar.value === "" || senhaCadastrar.value === "") {
            botaoCadastrar.disabled = true;
        } else {
            botaoCadastrar.disabled = false;
        }
    }
}
function redefinirSenha() {
    alert("Um email de redefinição de senha foi enviado. Verifique sua caixa de entrada.");

    /*const emailLogin = document.getElementById("emailLogin");

    sendPasswordResetEmail(auth, emailLogin)
        .then(() => {
            alert("Um email de redefinição de senha foi enviado. Verifique sua caixa de entrada.");
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert("Erro ao enviar email de redefinição: " + errorMessage);
        }); */
}


//cadastrar novo usuário usando Firebase Authentication
function cadastrarUsuario() {
    const email = document.getElementById("emailCadastrar").value;
    const senha = document.getElementById("senhaCadastrar").value;
    window.location.href = "./emBreve.html"
    /*
    // Cria um novo usuário com e-mail e senha utilizando o Firebase Authentication
    createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            window.location.href = "../emBreve.html"
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert("Erro no cadastro: " + errorMessage);
        }); */
};

// Função para realizar o login de um usuário
function login() {
    const email = document.getElementById("emailLogin").value;
    const senha = document.getElementById("senhaLogin").value;
    const span = document.getElementById("erro");
    const inputEmail = document.getElementById("emailLogin");
    const inputSenha = document.getElementById("senhaLogin");

    // Verifica se algum campo está vazio, se sim, exibe uma mensagem de erro e altera a borda dos inputs
    if (email === "" || senha === "") {
        span.style.display = "block";
        inputEmail.style.border = "1px solid red";
        inputSenha.style.border = "1px solid red";
        return;
    }
    window.location.href = "./emBreve.html";

    /*
    //realizar o login com Firebase Authentication
    signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            window.location.href = "../emBreve.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            span.style.display = "block";
            inputEmail.style.border = "1px solid red";
            inputSenha.style.border = "1px solid red";
        }); */
}

// Event listeners para formulário de cadastro e login
document.querySelector(".formularioCadastrar").addEventListener("submit", (event) => {
    event.preventDefault();
    cadastrarUsuario();
});

document.querySelector(".formularioLogin").addEventListener("submit", (event) => {
    event.preventDefault();
    login();
});

// Verifica os campos de login e cadastro ao carregar a página
document.getElementById("emailLogin").addEventListener("input", verificarCampos);
document.getElementById("senhaLogin").addEventListener("input", verificarCampos);
document.getElementById("emailCadastrar").addEventListener("input", verificarCampos);
document.getElementById("senhaCadastrar").addEventListener("input", verificarCampos);

// Chama a função verificarCampos para verificar os campos ao carregar a página
verificarCampos();