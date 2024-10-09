function abreMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}
function openform(){
    const formulario = document.getElementById('formulario');
    if (formulario.style.display === 'flex') {
        formulario.style.display = 'none';
    } else {
        formulario.style.display = 'flex';
    }
}

let mesesGastos = {}; // Armazena as seções de gastos por mês, incluindo os itens de cada mês
let mesIndexAtual = 0; // Índice do mês atual para navegação
const listaGastos = document.querySelector('.listaGastos');

carregarGastosDoLocalStorage();

function addGasto() {
    const nomeGasto = document.getElementById('nomeGasto').value;
    const valorGasto = document.getElementById('valorGasto').value;
    const tipoGasto = document.getElementById('tipoGasto').value;
    const categoria = document.getElementById('categoria').value;
    const dataGasto = document.getElementById('dataGasto').value;

    // Verificando se os campos foram preenchidos
    if (nomeGasto && valorGasto && tipoGasto !== "Tipo" && categoria !== "Categoria" && dataGasto) {
        const data = new Date(dataGasto);
        const mesAno = data.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });

        // Verifica se já existe uma seção para o mês
        if (!mesesGastos[mesAno]) {
            mesesGastos[mesAno] = [];
        }

        // Adiciona o novo gasto ao array de gastos do mês
        mesesGastos[mesAno].push({
            nome: nomeGasto,
            valor: parseFloat(valorGasto),
            data: dataGasto,
            categoria: categoria
        });

        // Ordena os gastos por data
        mesesGastos[mesAno].sort((a, b) => new Date(a.data) - new Date(b.data));

        // Limpa os campos do formulário
        document.getElementById('nomeGasto').value = '';
        document.getElementById('valorGasto').value = '';
        document.getElementById('tipoGasto').value = 'Tipo';
        document.getElementById('categoria').value = 'Categoria';
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
        mesesGastos[mesSelecionado].forEach((gasto, index) => {
            const dataFormatada = new Date(gasto.data).toLocaleDateString('pt-BR');
            const novoGasto = document.createElement('section');
            novoGasto.classList.add('gastoItem');
            novoGasto.innerHTML = `
                <h3>${gasto.nome} <p>${dataFormatada}</p></h3>
                <p>Valor: R$ ${gasto.valor.toFixed(2)} <button id="delete" onclick="removerGasto('${mesSelecionado}', ${index})">Remover</button></p>
            `;
            secaoMes.appendChild(novoGasto);
        });

        listaGastos.appendChild(secaoMes);
        document.getElementById('mesAtual').textContent = mesSelecionado;

    }
}

function removerGasto(mesAno, index) {
    if (mesesGastos[mesAno]) {
        // Remove o gasto pelo índice
        mesesGastos[mesAno].splice(index, 1);

        // Verifica se o mês está vazio após a remoção e o remove se necessário
        if (mesesGastos[mesAno].length === 0) {
            delete mesesGastos[mesAno];
            mesIndexAtual = Math.max(0, mesIndexAtual - 1);
        }

        // Atualiza o localStorage e a lista de meses
        salvarGastosNoLocalStorage();
        atualizarMeses();
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
