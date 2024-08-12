let totalGeral = 0;
limpar();

function adicionar() {
    // Recuperar valores do produto, quantidade e preço unitário
    let produto = document.getElementById('produto').value;
    let quantidade = parseInt(document.getElementById('quantidade').value);

    if (!produto || isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, selecione um produto e insira uma quantidade válida.');
        return;
    }

    let nomeProduto = produto.split('-')[0].trim();
    let valorUnitario = parseFloat(produto.split('R$')[1].replace(',', '.'));

    // Calcular o preço total do produto
    let preco = quantidade * valorUnitario;
    totalGeral += preco;

    // Atualizar a lista de produtos no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} 
        <span class="texto-azul">R$${preco.toFixed(2).replace('.', ',')}</span>
    </section>`;

    // Atualizar o total geral
    document.getElementById('valor-total').textContent = `R$${totalGeral.toFixed(2).replace('.', ',')}`;

    // Limpar o campo de quantidade após adicionar
    document.getElementById('quantidade').value = '';
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0,00';
}