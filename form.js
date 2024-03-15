var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", (event) => {
	event.preventDefault(); //para de recarregar a tela e exibe o conteúdo da função

	var form = document.querySelector("#form-adiciona")

	//extraindo informações do paciente form via function
	var paciente = obtemPacienteDoFormulario(form);


	var erros = validaPaciente(paciente); //aqui a variável erro vai percorrer o array gerado pela  function validaPaciente e se tiver erro, vai enviar a mensagem para o id="mensagem-erro" do span do index.
	if (erros.length > 0) {
		exibeMensagensDeErro(erros);
		return;
	}

	//aqui chamamos a função para adicionar os pacientes à tabela
	adicionaPacienteNaTabela(paciente);
	form.reset();

	var mensagemErro = document.querySelector("#mensagem-erro"); //aqui zeramos todas as mensagens de erro das ul/li do form
	mensagemErro.innerHTML = "";
})


//agora vamos criar uma função com objeto paciente, que vai capturar os names do form
function obtemPacienteDoFormulario(form) {
	var paciente = {
		nome: form.nome.value, // busca o name=nome do index
		peso: form.peso.value, // busca o name=peso do index
		altura: form.altura.value, // busca o name=altura do index
		gordura: form.gordura.value, // busca o name=gordura do index
	};

// Calcula o IMC se ambos peso e altura forem válidos
	paciente.imc = calculaImc(paciente.peso, paciente.altura);


	return paciente;
}

function montaTr(paciente) {
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente"); //aqui adicionamos a classe ao tr


	var nomeTd = montaTd(paciente.nome, "info-nome");//aqui chamamos a função montaTd para enviar as informações para o Td e tr
	var pesoTd = montaTd(paciente.peso, "info-peso");//passando o mouse sobre a classa montaTd aparece (dado: any, classe: any) = que será defenida por parâmetro na function monta td
	var alturaTd = montaTd(paciente.altura, "info-altura");
	var gorduraTd = montaTd(paciente.gordura, "info-gordura");
	var imcTd = montaTd(paciente.imc, "info-imc");

	//agora vamos injetar os valores dentro das "td" = substituimos essa parte pela função montaTd
	// nomeTd.textContent = paciente.nome;
	// pesoTd.textContent = paciente.peso;
	// alturaTd.textContent = paciente.altura;
	// gorduraTd.textContent = paciente.gordura;
	// imcTd.textContent = paciente.imc;

	//agora vamos colocar os td dentro do tr.
	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	return pacienteTr;
}

function montaTd(dado, classe) { //aqui criamos a td e vamos adicionar os dados pelo formulário
	var td = document.createElement("td");
	td.classList.add(classe);//adiciona a classe ao td
	td.textContent = dado;
	return td;
}


//aqui criamos a função para validar os dados digitados no form
function validaPaciente(paciente) {
	var erros = []; //aqui criamos um array para erros de peso, altura e campo vazio
	if (paciente.nome.length == 0) {
		erros.push("O nome não pode ser em branco."); //aqui empurramos a msg para dentro do array erro
	}
	if (paciente.peso.length == 0) {
		erros.push("O peso não pode ser em branco."); //aqui empurramos a msg para dentro do array erro
	}
	if (paciente.altura.length == 0) {
		erros.push("A altura não pode ser em branco."); //aqui empurramos a msg para dentro do array erro
	}
	if (paciente.gordura.length == 0) {
		erros.push("A gordura não pode ser em branco."); //aqui empurramos a msg para dentro do array erro
	}

	// Verificações de validade de peso e altura
	if (!validaPeso(paciente.peso)) {
		erros.push("Peso é inválido!");
	}

	if (!validaAltura(paciente.altura)) {
		erros.push("Altura é inválida!");
	}
	return erros;
}

//aqui temos a função para exibir as mensagens de erro em formato ul/li
function exibeMensagensDeErro(erros){
	var ul = document.querySelector("#mensagem-erro");

	ul.innerHTML = ""; //zera as mensagens de erro cada vez que o usuário clica no button Adicionar


	erros.forEach(erro => {
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}

function adicionaPacienteNaTabela(paciente) {
	//agora vamos criar a tabela para inserção dos dados na tabela (tr e td)
	var pacienteTr = montaTr(paciente);
	//adicionando o paciente na tabela
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}
