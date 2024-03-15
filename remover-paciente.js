/* var tabela = document.querySelector("#tabela-pacientes");

pacientes.forEach(paciente => {//aqui vamos adicionar uma função para excluir um paciente com duplo clique
    paciente.addEventListener("dblclick", function (event) { //aqui temos exemplos de como fazer o mesmo comando
        //var alvoEvento = event.target;//td
        //var paiDoAlvo = alvoEvento.parentNode;//tr
        //paiDoAlvo.remove();

        //this.remove();

        event.target.parentNode.classList.add("fadeOut");
        setTimeout(() => { //aqui estabelecemos o tempo de 0,5segundos para que o paciente seja excluído da tabela
            event.target.parentNode.remove();
        }, 500);
    })

}); */


var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event) { //aqui vamos adicionar uma função para excluir um paciente com duplo clique
        //aqui temos exemplos de como fazer o mesmo comando
        //var alvoEvento = event.target;//td
        //var paiDoAlvo = alvoEvento.parentNode;//tr
        //paiDoAlvo.remove();

        //this.remove();

        event.target.parentNode.classList.add("fadeOut"); //fadeout foi adicionao ao index.css (para esmaecer antes de apagar)
        setTimeout(() => { //aqui estabelecemos o tempo de 0,5segundos para que o paciente seja excluído da tabela
            event.target.parentNode.remove();
        }, 500);
    });

