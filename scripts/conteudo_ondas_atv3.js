var IdPadrao = [['parte/parte','q/questao','/itemletra','/subitem'],'_'];

/*
	Questoes
*/

var Partes = ['1','2'];

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
					caracteres_especiais: 'pi',
					enunciado: ' Ajuste os parâmetros <em>a</em>, <em>b, <em>c</em> <em>e</em> <em>d</em> da função <em>f(x)=a*sen(b*x+c)+d</em> para obter uma função que descreva, de modo aproximado, a oscilação da maré na situação apresentada na tabela acima.',
					dados:	[
								[{label: '<em>a</em>:', tipo: 'grande'},{label: '<em>b</em>:', tipo: 'grande'}],
								[{label: '<em>c</em>:', tipo: 'grande'},{label: '<em>d</em>:', tipo: 'grande'}]
							],
					msgErro: 'Varie o valor de cada um dos parâmetros de modo a obter uma função que se ajuste bem aos pontos dados. Começar pelos parâmetros a e d deve facilitar a resolução.',
					msgAjuda: 'A correção da questão será com base nos valores ajustados nos seletores da ferramenta ao lado.'
				}
			]
		}
	},
	{//Parte 2
	}
]

var MeuBloco = new Array();