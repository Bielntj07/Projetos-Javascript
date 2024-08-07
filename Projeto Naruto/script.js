function pesquisarPersonagem() {
    var input, filter, div, divContent, h2, i, txtValue;
    input = document.getElementById('PesquisarPersonagem');
    filter = input.value.toUpperCase();
    div = document.getElementById('Naruto');
    divContent = div.children;

    for (i = 0; i < divContent.length; i++) {
        if (divContent[i].id.endsWith('Info')) {
            h2 = divContent[i].getElementsByTagName('h2')[0];
            txtValue = h2.textContent || h2.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                divContent[i].style.display = '';
            } else {
                divContent[i].style.display = 'none';
            }
        }
    }
}