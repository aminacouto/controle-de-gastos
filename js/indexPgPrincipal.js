function abreMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

let mesesGastos = {}; // Armazena as seções de gastos por mês, incluindo os itens de cada mês
let mesIndexAtual = 0; // Índice do mês atual para navegação
const listaGastos = document.querySelector('.listaGastos');

carregarGastosDoLocalStorage();

/**/
function addGasto() {
    const nomeGasto = document.getElementById('nomeGasto').value;
    const valorGasto = document.getElementById('valorGasto').value;
    const tipoGasto = document.getElementById('tipoGasto').value;
    const dataGasto = document.getElementById('dataGasto').value;

    // Verificando se os campos foram preenchidos
    if (nomeGasto && valorGasto && tipoGasto !== "Tipo" && dataGasto) {
        const data = new Date(dataGasto);
        const mesAno = data.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });

        // Verifica se já existe uma seção para o mês
        if (!mesesGastos[mesAno]) {
            mesesGastos[mesAno] = [];
        }

        // Adiciona o novo gasto ao array de gastos do mês
        mesesGastos[mesAno].push({
            nome: nomeGasto,
            valor: valorGasto,
            data: dataGasto
        });

        // Ordena os gastos por data
        mesesGastos[mesAno].sort((a, b) => new Date(a.data) - new Date(b.data));

        // Limpa os campos do formulário
        document.getElementById('nomeGasto').value = '';
        document.getElementById('valorGasto').value = '';
        document.getElementById('tipoGasto').value = '';
        document.getElementById('dataGasto').value = '';

        // Salvar no localStorage
        salvarGastosNoLocalStorage();

        atualizarMeses();
    } else {
        alert("Preencha todos os campos!");
    }
}

function salvarGastosNoLocalStorage() {
    localStorage.setItem('gastos', JSON.stringify(mesesGastos));
}

function carregarGastosDoLocalStorage() {
    const gastosSalvos = localStorage.getItem('gastos');
    if (gastosSalvos) {
        mesesGastos = JSON.parse(gastosSalvos);
        atualizarMeses();
    }
}

function atualizarMeses() {
    const meses = Object.keys(mesesGastos);

    if (meses.length > 0) {
        document.querySelectorAll('.gastosMes').forEach(section => section.remove()); // Limpa as seções antigas

        const mesSelecionado = meses[mesIndexAtual];
        const secaoMes = document.createElement('section');
        secaoMes.classList.add('gastosMes');

        // Adiciona os gastos do mês selecionado na ordem correta
        mesesGastos[mesSelecionado].forEach(gasto => {
            const dataFormatada = new Date(gasto.data).toLocaleDateString('pt-BR');
            const novoGasto = document.createElement('section');
            novoGasto.classList.add('gastoItem');
            novoGasto.innerHTML = `
                <h3>${gasto.nome} <p>${dataFormatada}</p></h3>
                <p>Valor: R$ ${gasto.valor}</p>
            `;
            secaoMes.appendChild(novoGasto);
        });

        listaGastos.appendChild(secaoMes);
        document.getElementById('mesAtual').textContent = mesSelecionado;
    }
}

function navegarMeses(direcao) {
    const meses = Object.keys(mesesGastos);

    if (meses.length > 0) {
        mesIndexAtual += direcao;

        if (mesIndexAtual < 0) {
            mesIndexAtual = meses.length - 1;
        } else if (mesIndexAtual >= meses.length) {
            mesIndexAtual = 0;
        }

        atualizarMeses();
    }
}
