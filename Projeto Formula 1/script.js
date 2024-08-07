function esconderTodosPilotos() {
    var pilotos = document.querySelectorAll('#Piloto div');
    for (var i = 0; i < pilotos.length; i++) {
        pilotos[i].style.display = 'none';
    }
}

function pesquisarPiloto() {
    var nome = document.getElementById('Pesquisar Piloto').value;

    esconderTodosPilotos();

    var piloto = document.getElementById(nome);
    if (piloto) {
        piloto.style.display = 'block';
    } else {
        alert('Piloto não encontrado.');
    }
}

