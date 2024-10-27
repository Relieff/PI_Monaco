const lista = document.getElementById('listagem');
const itens = lista.getElementsByClassName('li');

for (let i = 0; i < itens.length; i++) {

    itens[i].addEventListener('click', function() {
        this.classList.toggle('selecionado');
    });
}