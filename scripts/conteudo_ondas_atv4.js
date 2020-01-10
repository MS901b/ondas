var IdPadrao = [['parte/parte','q/questao','/itemletra','/subitem'],'_'];

/*
	Questoes
*/
var Partes = ['1','2','3','4'];
var nomeSoft = 'ondas';

var Questoes = 
[
	{//Parte 1	
	},
	{//Parte 2
		
		parte2_q1: //Questão 1
		{
			itens: 
			[
				
				{//A
					tipo: 'multiplo_input',
					corrigir: corrige_q_1_a,
					caracteres_especiais: 'pi',
					enunciado: 'Ajuste os parâmetros da função <em>h<sub>1</sub>(t)=a<sub>1</sub>*sen(b<sub>1</sub>*t+c<sub>1</sub>)+d<sub>1</sub></em> para que ela descreva a altura do ponto <em>P</em> em relação ao chão.',
					dados:	[
								[{label: '<em>a<sub>1</sub></em>:', tipo: 'grande'},{label: '<em>b<sub>1</sub></em>:', tipo: 'grande'}],
								[{label: '<em>c<sub>1</sub></em>:', tipo: 'grande'},{label: '<em>d<sub>1</sub></em>:', tipo: 'grande'}]
							],
					msgErro: 'Lembre-se que o parâmetro a<sub>1</sub> determina a amplitude da função; o parâmetro b<sub>1</sub>, o período; o parâmetro c<sub>1</sub>, a fase, ou seja, o valor da função quando x=0; e o parâmetro d<sub>1</sub> altera a imagem sem modificar a amplitude.',
					msgAjuda: 'Note que o eixo X, que representa o tempo, está indicado em segundos.'
				}
			]
		} 
	},
	{ //Parte 3
		parte3_q2: //Questão 2
		{
			itens: 
			[
				
				{//A
					tipo: 'multiplo_input',
					corrigir: corrige_q_2_a,
					enunciado: 'Ajuste os parâmetros da função </em>h<sub>2</sub>(t)= a<sub>2</sub>*sen(b<sub>2</sub>*t+c<sub>2</sub>)+d<sub>2</sub></em> para que ela descreva a altura da cadeira em relação ao ponto <em>P</em>',
					caracteres_especiais: 'pi',
					dados:	[
								[{label: '<em>a<sub>2</sub></em>:', tipo: 'grande'},{label: '<em>b<sub>2</sub></em>:', tipo: 'grande'}],
								[{label: '<em>c<sub>2</sub></em>:', tipo: 'grande'},{label: '<em>d<sub>2</sub></em>:', tipo: 'grande'}]
							],
					msgErro: 'Lembre-se que o parâmetro a<sub>2</sub> determina a amplitude da função; o parâmetro b<sub>2</sub>, o período; o parâmetro c<sub>2</sub>, a fase, ou seja, o valor da função quando x=0; e o parâmetro d<sub>2</sub> altera a imagem sem modificar a amplitude. Note que agora você está lidando com a altura da cadeira em relação ao centro da roda secundária.',
					msgAjuda: 'Note que o eixo X, que representa o tempo, está indicado em segundos.'
				}
			]
		} 
	},
	{ //Parte 4
		parte4_q3: //Questão 3
		{
			itens: 
			[
				
				{//A
					tipo: 'input',
					corrigir: corrige_q_3_a,
					enunciado: 'Qual é a altura máxima, em metros, que a cadeira pode atingir?',
					msgErro: 'O raio da roda maior é de 20 metros. Já o da roda menor, de 4 metros. Porém, analise o gráfico para ver qual é o maior valor que a função assume.'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_3_b,
					enunciado: 'De quanto em quanto tempo, em segundos, uma pessoa pode descer da cadeira? Note que uma pessoa só pode descer quando a cadeira está na altura mínima.', 
					msgErro: 'Analise o gráfico e veja a distância entre dois pontos de mínimo consecutivos da função.'
				}
			]
		}
	}
]

var MeuBloco = new Array();