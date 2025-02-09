function adicionar(valor) {
    document.getElementById('tela').value += valor;
}
function limpar() {
    document.getElementById('tela').value = '';
}
function calcular() {
    try {
        document.getElementById('tela').value = eval(document.getElementById('tela').value);
    } catch (e) {
        alert('Erro na expressão');
    }
}