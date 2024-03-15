var titulo = (document.querySelector(".titulo")); //aqui chamamos a classe a alterar

//exemplo função nomeada
/* 	titulo.addEventListener("click",mostraMensagem);
	function mostraMensagem(){
		console.log("fui clicado!")
	} */
//abrir o navegador F12-console = se clicar no título, aparece o "fui clicado!"

//exemplo função anônima
/* titulo.addEventListener("click",function(){
	console.log("Fui clicaco pela função anônima!");
});
abrir o navegador F12-console = se clicar no título, aparece o "fui clicado pela função anônima!" */

//exemplo aero função
/* titulo.addEventListener("click",() =>{ 
	console.log("Fui clicaco pela aero funcion!")});
abrir o navegador F12-console = se clicar no título, aparece o "fui clicado pela aero funciont!" 
 */



titulo.textContent = "Aparecida Nutricionista";


//aqui fizemos o cálculo apenas para i id=primeiro paciente	
/* 	var paciente = (document.querySelector("#primeiro-paciente"));//aqui chamamos o id apenas do 1º paciente
	
	var tdpeso = paciente.querySelector(".info-peso"); //aqui buscamos a classe info-peso do id primeiro-paciente
	var peso = tdpeso.textContent;

	var tdaltura = paciente.querySelector(".info-altura");//aqui buscamos a classe info-altura do id primeiro-paciente
	var altura = tdaltura.textContent;

	var tdimc = paciente.querySelector(".info-imc"); //aqui buscamos a classe info-imc do id primeiro-paciente

	var imc = peso / (altura*altura);
	//var imc = peso / Math.pow(altura, 2); =>outra maneira de calcular o IMC.

	tdimc.textContent = imc.toFixed(2); 
 */

//agora vamos refazer o código na estrutura for, para fazer o laço de repetição para a class=paciente
var pacientes = (document.querySelectorAll(".paciente"));//aqui chamamos toda a classe paciente
/* console.log(pacientes); para verificar o selectorAll*/

for (var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];

	var tdpeso = paciente.querySelector(".info-peso"); //aqui buscamos a classe info-peso do id primeiro-paciente
	var peso = tdpeso.textContent;

	var tdaltura = paciente.querySelector(".info-altura");//aqui buscamos a classe info-altura do id primeiro-paciente
	var altura = tdaltura.textContent;

	var tdimc = paciente.querySelector(".info-imc"); //aqui buscamos a classe info-imc do id primeiro-paciente

	var pesoValido = validaPeso(peso);
	var alturaValida = validaAltura(altura);

	if (!pesoValido) {//aqui verificamos se o peso digitado é falso e exibirá a mensagem "Peso inválido!"
		tdimc.textContent = "Peso inválido!";
		paciente.classList.add("paciente-invalido");
	}

	if (!alturaValida) {//aqui verificamos se a altura digitada é falsa e exibirá a mensagem "Altura inválida!"
		tdimc.textContent = "Altura inválida!";
		paciente.classList.add("paciente-invalido");
	}

	if(pesoValido && alturaValida){
	var imc = calculaImc(peso, altura); //aqui chamamos a função criada abaixo
	//var imc = peso / Math.pow(altura, 2); =>outra maneira de calcular o IMC.
	tdimc.textContent = imc;
}
}

function calculaImc(peso, altura) {
	var imc = 0; //aqui fazemos q a variável imc zere e calcule de novo
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}

function validaPeso(peso) {
	if (peso >= 0 && peso <= 650) {
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura) {
	if (altura > 0 && altura <= 3.00) {
		return true;
	} else {
		return false;
	}
}
