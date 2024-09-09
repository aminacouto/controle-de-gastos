import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const auth = getAuth();

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

    if (email === "" || senha === "") {
        alert("Por favor, preencha todos os campos antes de continuar.");
        return
    };

    signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            window.location.href = "../emBreve.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert("Erro no login: " + errorMessage);
        });
}

document.querySelector(".formulario").addEventListener("submit", cadastrarUsuario);
document.querySelector(".formulario").addEventListener("submit", login);

