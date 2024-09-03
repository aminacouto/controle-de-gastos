import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyB3JQBCKeBIN34LDQwIggL6WQgRkhYcPFs",
    authDomain: "controle-de-gastos-123e0.firebaseapp.com",
    projectId: "controle-de-gastos-123e0",
    storageBucket: "controle-de-gastos-123e0.appspot.com",
    messagingSenderId: "637250162104",
    appId: "1:637250162104:web:304225a0b9595ca2d7134d"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  /*REALIZAR O LOGIN - ir para a pag principal */
const botaoEntrar = document.getElementById('botaoEntrar');
botaoEntrar.addEventListener("click", function(event){
    event.preventDefault()

  const email = document.getElementById('emailLogin').value;
  const password = document.getElementById('senhaLogin').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    window.location.href = "../paginaPrincipal.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  
});