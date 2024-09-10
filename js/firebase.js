import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// Inicializa a autenticação do Firebase
const auth = getAuth();

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
export function redefinirSenha() {
    const emailLogin = document.getElementById("emailLogin");

    sendPasswordResetEmail(auth, emailLogin)
        .then(() => {
            alert("Um email de redefinição de senha foi enviado. Verifique sua caixa de entrada.");
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert("Erro ao enviar email de redefinição: " + errorMessage);
        });
}


//cadastrar novo usuário usando Firebase Authentication
export function cadastrarUsuario() {
    const email = document.getElementById("emailCadastrar").value;
    const senha = document.getElementById("senhaCadastrar").value;

    // Cria um novo usuário com e-mail e senha utilizando o Firebase Authentication
    createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            window.location.href = "../emBreve.html"
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert("Erro no cadastro: " + errorMessage);
        });
};

// Função para realizar o login de um usuário
export function login() {
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
        return
    };
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
        });
}

// Adiciona um listener ao formulário para realizar o cadastro quando for submetido
document.querySelector(".formularioCadastrar").addEventListener("submit", cadastrarUsuario);

// Adiciona um listener ao formulário para realizar o login quando for submetido
document.querySelector(".formularioLogin").addEventListener("submit", login);

// Adiciona o listener para verificar quando o usuário digitar no campo de email
document.getElementById("emailLogin").addEventListener("input", novaSenha);

// Verifica os campos de login sempre que o usuário digitar
document.getElementById("emailLogin").addEventListener("input", verificarCampos);
document.getElementById("senhaLogin").addEventListener("input", verificarCampos);

// Verifica os campos de cadastro sempre que o usuário digitar
document.getElementById("emailCadastrar").addEventListener("input", verificarCampos);
document.getElementById("senhaCadastrar").addEventListener("input", verificarCampos);

// Chama a função verificarCampos para verificar os campos ao carregar a página
verificarCampos();