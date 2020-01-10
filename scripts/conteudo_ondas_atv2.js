var IdPadrao = [['parte/parte','q/questao','/itemletra','/subitem'],'_'];

/*
	Questoes
*/

var Partes = ['1','2'];
var nomeSoft = 'ondas';

var Questoes = 
[
	{//Parte 1
		parte1_q1: //Questão 1
		{
			itens: 
			[
				{//A
					tipo: 'multiplo_input',
					corrigir: corrige_q_1_a,
					enunciado: 'Quais são os valores que devem ser atribuídos aos parâmetros <em>a</em>, <em>b</em> e <em>d</em> na função  <em>f(t)=a*sen(b*t)+d</em>, de modo que ela descreva o brilho da estrela Delta Cephei?',
					dados:	[
							 [{label: '<em>a</em>:', tipo: 'pequeno'},{label: '<em>b</em>:', tipo: 'pequeno'}, {label: '<em>d</em>:', tipo: 'pequeno'}]
							],
					msgErro: 'Lembre-se que o parâmetro “a” determina a amplitude da função; o parâmetro “b”, o período; e o parâmetro “d” altera a imagem sem modificar a amplitude. Com isso em mente, varie os valores de cada parâmetro no quadro ao lado para fazer com que o gráfico da função tenha as características desejadas.'
				}
			]
		},
		parte1_q2: //Questão 2
		{
			itens: 
			[
				{//A
					tipo: 'multiplo_input',
					corrigir: corrige_q_2_a,
					enunciado: 'Ajuste o valor de <em>c</em> para que o brilho da estrela seja máximo quando <em>t=0</em>.',
					dados:	[
							 [{label: '<em>c</em>:', tipo: 'pequeno'}]
							],
					msgErro: 'Varie o valor de "c" no quadro ao lado até encontrar um valor que satisfaça as condições do enunciado. ',
					msgAjuda: 'É necessário que a questão 1 esteja resolvida corretamente.'
				}
			]
		} 
	},
	{//Parte 2
	}
]

var MeuBloco = new Array();