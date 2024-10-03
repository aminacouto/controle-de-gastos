function abreMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}


/**/
function addGasto() {
    const nomeGasto = document.getElementById('nomeGasto').value;
    const valorGasto = document.getElementById('valorGasto').value;
    const tipoGasto = document.getElementById('tipoGasto').value;
    const dataGasto = document.getElementById('dataGasto').value;

    // Verificando se os campos foram preenchidos
    if (nomeGasto && valorGasto && tipoGasto !== "Tipo") {
        // Criando o novo item da lista de gastos
        const novoGasto = document.createElement('section');
        novoGasto.classList.add('gastoItem');

        // Inserindo o conteúdo no item
        novoGasto.innerHTML = `
        <h1>${nomeGasto}</h1>
        <p>Valor: R$ ${valorGasto} (${tipoGasto})</p>`;

        // Adicionando o novo item na lista de gastos
        document.querySelector('.listaGastos').appendChild(novoGasto);

        // Limpar os campos do formulário após adicionar
        document.getElementById('nomeGasto').value = '';
        document.getElementById('valorGasto').value = '';
        document.getElementById('tipoGasto').value = 'Tipo';

    } else {
        alert("Preencha todos os campos!");
    }
}
