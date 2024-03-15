var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
   // console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");



    if (this.value.length > 0) {//aqui estamos criando uma condição, para que se for digitado algum valor dentro do input da pesquisa, inicie a pesquisa na coluna nome na tabela
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome"); //aqui determinamos que a consulta vai ser na classe .info-nome, que corresponde a coluna nome
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value,"i");//o "i" é um case insensitive = desconsidera se é maiúsculo ou minúsculo

            if (expressao.test(nome)) {//aqui vai buscar as letras digitadas no campo de pesquisa do index, na coluna nome
                paciente.classList.remove("invisivel");
            } else {
                paciente.classList.add("invisivel");
            }
        }
    } else { //se for apagado o que foi digitiado no campo de pesquisa, volta a aparecer todas as linhas da tabela
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }

});