var IdPadrao = [['parte/parte','q/questao','/itemletra','/subitem'],'_'];

/*
	Questoes
*/
var Partes = ['1', '2', '3', '4', '5'];
var nomeSoft = 'ondas';

var Questoes = 
[
	{//Parte 1
		
		parte1_q1: //Questão 1
		{
			itens: 
			[
				
				{//A
					tipo: 'multipla_escolha',
					corrigir: corrige_q_1_a,
					selecionada: selecionou_q_1_a,
					associado: true,
					enunciado: 'Varie o valor de <em>c</em> e observe o que ocorre com o gráfico vermelho. Como podemos descrever o efeito da variação desse parâmetro no gráfico da função?',
					dados:	[
						{value: 'vertical', label: 'o gráfico desloca-se verticalmente'},
						{value: 'horizontal', label: 'o gráfico desloca-se horizontalmente'},
						{value: 'imagem', label: 'a imagem da função muda'},
						{value: 'período', label: 'o período da função muda'}
					],
					msgErro: 'Movimente o <a id="setRed">seletor vermelho</a> para variar o valor de “c” e observe o que acontece com o gráfico da função g(x)=sen(x+c), em vermelho'
				}
			]
		},
		parte1_q2: //Questão 2
		{
			itens: 
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_2_a,
					selecionada: selecionou_q_2_a,
					caracteres_especiais: 'pi',
					associado: true,
					enunciado: 'Qual o menor valor maior do que zero de <em>c</em> que faz com que os gráficos vermelho e cinza coincidam?',
					msgErro: 'Varie o valor de "c" no quadro ao lado até que coincidam os dois gráficos. Lembre-se que a questão pede o menor valor positivo.',
					msgAjuda: 'Dê a resposta em forma decimal com 2 casas depois da vírgula. Um valor positivo é não nulo.'
				}
			]
		},
		parte1_q3: //Questão 3
		{
			itens: 
			[
				{//A
					tipo: 'input',
					selecionada: selecionou_q_3_a,
					associado: true,
					corrigir: corrige_q_3_a,
					caracteres_especiais: 'pi',
					enunciado: 'Agora,  a função que aparece em cinza é <em>f(x)=cos(x)</em>. Encontre um valor de <em>c</em> que faça o gráfico da função <em>g(x)</em> coincidir com o gráfico da função <em>f(x)=cos(x)</em>.',
					msgErro: 'Varie o valor de "c" no quadro ao lado até que as funções coincidam.',
					msgAjuda: 'Dê a resposta em forma decimal com 2 casas depois da vírgula.'
				}
			]
		} 
	},
	{ //Parte 2
		parte2_q4: //Questão 4
		{
			itens: 
			[
				
				{//A
					tipo: 'multipla_escolha',
					corrigir: corrige_q_4_a,
					enunciado: 'Varie o valor de <em>a</em> no seletor vermelho. Qual o efeito que ele causa no gráfico?',
					dados:	[
						{value: 'vertical', label: 'o gráfico desloca-se verticalmente'},
						{value: 'horizontal', label: 'o gráfico desloca-se horizontalmente'},
						{value: 'imagem', label: 'a imagem da função muda'},
						{value: 'período', label: 'o período da função muda'}
					],
					msgErro: 'Movimente o <a id="setRed">seletor vermelho</a> para variar o valor de “a” e observe o que acontece com o gráfico da função g(x)=a sen(x), em vermelho.'
				}
			]
		},
		parte2_q5: //Questão 5
		{
			enunciadoGeral: 'Considerando o valor que você vai definir abaixo para <em>a</em>, responda os próximos itens da questão.',
			itens: 
			[
				{//valor inicial
					tipo: 'valor_inicial',
					seta: set1,
					tira: unset1,
					dados:	[
							 [{label:'Valor de a:', id:'atividade1_valor_a'}]
							],
					enunciado: 'Escolha o valor de a entre -3 e 3, diferente de 0 e 1.',
					usado: 'Este valor será usado nos itens A e B.'
				},
				{//A
					tipo: 'multiplo_input',
					corrigir: corrige_q_5_a,
					enunciado: 'Qual o maior valor assumido por g(x): ',
					esperando: true,
					dados:	[
							 [{tipo: 'grande'}]
							],
					msgErro: 'Uma vez escolhido o valor de "a", verifique no gráfico o maior valor assumido pela função.'
				},
				{//B
					tipo: 'multiplo_input',
					corrigir: corrige_q_5_b,
					enunciado: 'Qual o menor valor assumido por <em>g(x)</em>:',
					esperando: true,
					dados:	[
							 [{tipo: 'grande'}]
							],
					msgErro: 'Uma vez escolhido o valor de "a", verifique no gráfico o menor valor assumido pela função.'
				}				
			]
		},
		parte2_q6: //Questão 6
		{
			itens: 
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_6_a,
					enunciado: 'Qual deve ser o valor de <em>a</em> para que a Imagem de <em>g(x)</em> seja igual a [-4;4]? ',
					msgErro: 'Use o quadro ao lado para encontrar o valor pedido.'
				}
			]
		} 
	},
	{ //Parte 3
		parte3_q7: //Questão 7
		{
			enunciadoGeral: 'Faça <em>b=3</em> e clique em “uma volta” para que o ponto <em>A</em> complete uma volta no ciclo trigonométrico.',
			itens: 
			[
				
				{//A
					tipo: 'input',
					corrigir: corrige_q_7_a,
					enunciado: 'Quantas voltas o ponto <em>B</em> deu no círculo?',
					msgErro: 'Clique no botão “uma volta” para ver a animação novamente.'
				},
				{//B
					tipo: 'multiplo_input',
					corrigir: corrige_q_7_b,
					enunciado: 'Agora observe o rastro dos pontos <em>C</em> (cinza) e <em>D</em> (vermelho) nos gráficos das suas funções. Quantas vezes cada um deles atingiu o valor máximo?', 
					dados:	[
							 [{label: 'ponto <em>C</em>:', tipo: 'pequeno'},{label: 'ponto <em>D</em>: ', tipo: 'pequeno'}]
							],
					msgErro: 'Clique no botão “uma volta” para ver a animação novamente.'
				}
			]
		},
		parte3_q8: //Questão 8
		{
			enunciadoGeral: 'Faça <em>b=4</em> e clique em “uma volta” para que o ponto <em>A</em> complete uma volta no ciclo trigonométrico. ',
			itens: 
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_8_a,
					enunciado: 'Quantas voltas o ponto <em>B</em> deu no círculo?',
					msgErro: 'Clique no botão “uma volta” para ver a animação novamente.'
				},
				{//B
					tipo: 'multiplo_input',
					corrigir: corrige_q_8_b,
					enunciado: 'Agora observe o rastro dos pontos <em>C</em>  (cinza) e <em>D</em>  (vermelho) nos gráficos das suas funções. Quantas vezes cada um deles atingiu o valor máximo?', 
					dados:	[
							 [{label: 'ponto <em>C</em>:', tipo: 'pequeno'},{label: 'ponto <em>D</em>: ', tipo: 'pequeno'}]
							],
					msgErro: 'Clique no botão “uma volta” para ver a animação novamente.'
				}
			]
		},
		parte3_q9: //Questão 9
		{
			itens: 
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_9_a,
					caracteres_especiais: 'pi',
					enunciado: 'Qual é o período de <em>g(x)</em> se <em>b=6</em>?',
					msgErro: 'Note que o período de g(x) vai ser igual a 2&pi;/b.',
					msgAjuda: 'Dê a resposta com pelo menos duas casas decimais.'
				}
			]
		} 
	},
	{//Parte 4
		parte4_q10: //Questão 4
		{
			itens: 
			[
				
				{//A
					tipo: 'multipla_escolha',
					corrigir: corrige_q_10_a,
					enunciado: 'Varie o valor de <em>d</em> e observe o que ocorre com o gráfico vermelho. Como podemos descrever o efeito da variação desse parâmetro no gráfico da função?',
					dados:	[
						{value: 'vertical', label: 'o gráfico desloca-se verticalmente'},
						{value: 'horizontal', label: 'o gráfico desloca-se horizontalmente'},
						{value: 'imagem', label: 'a imagem da função muda'},
						{value: 'período', label: 'o período da função muda'}
					],
					msgErro: 'Movimente o <a id="setRed">seletor vermelho</a> e observe o que acontece com o gráfico da função g(x), em vermelho.'
				}
			]
		},
		parte4_q11:
		{
			itens: 
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_11_a,
					enunciado: 'Qual o menor valor de <em>d</em> para que a função assuma apenas valores maiores ou iguais a 0?',
					msgErro: 'Varie o valor de "d" no quadro ao lado até encontrar a resposta.'
				}
			]
		}
	},
	{//Parte 5
		parte5_q12: //Questão 12
		{
			itens: 
			[
				{//A
					tipo: 'multiplo_input',
					corrigir: corrige_q_12_a,
					caracteres_especiais: 'pi',
					enunciado: 'Quais os valores de <em>a</em>, <em>b</em>, <em>c</em> e <em>d</em> para que os gráficos sejam iguais?', 
					dados:	[
							 [{label: '<em>a</em>:', tipo: 'grande' },{label: '<em>b</em>:', tipo: 'grande'}],
							 [{label: '<em>c</em>:', tipo: 'grande'},{label: '<em>d</em>:', tipo: 'grande'}]
							],
					msgErro: 'Movimente os seletores relativos a cada um dos parâmetros até ajustar um gráfico sobre o outro.'
				}
			]
		},
		parte5_q13: //Questão 13
		{
			itens: 
			[
				{//A
					tipo: 'generico',
					corrigir: corrige_q_13_a,
					esperando: false,
					dependente: false,
					associado: false,
					enunciado: 'Qual a imagem da função?', 
					dados: '<div><span class="a_esquerda"><span class="a_esquerda" style="font-size:30px; line-height:14px;">[</span></span><div id="corretor_q13_a_11"><input id="parte5_q13_a_11" style="width:40px; margin: 0 5px !important;"/></div><span class="a_esquerda antes_depois depois">,</span><div id="corretor_q13_a_12"><input id="parte5_q13_a_12" style="width:40px; margin: 0 5px !important;"/></div><span class="a_esquerda"><span class="a_esquerda" style="font-size:30px; line-height:14px;">]</span></span></div><br class="limpador" />',
					msgErro: 'Lembre-se que a imagem de uma função é o conjunto de valores que ela assume.'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_13_b,
					enunciado: 'Qual a amplitude da função?',
					msgErro: 'Lembre-se que a amplitude da função é a metade da diferença entre o menor e o maior valores que ela assume.'
				},
				{//C
					tipo: 'input',
					corrigir: corrige_q_13_c,
					caracteres_especiais: 'pi',
					enunciado: 'Qual o período da função?',
					msgErro: 'Lembre-se que o período é o tamanho do intervalo no eixo X que ela precisa para completar um ciclo.'
				},
				{//D
					tipo: 'input',
					corrigir: corrige_q_13_d,
					caracteres_especiais: 'pi',
					enunciado: 'Qual a frequência da função?',
					msgErro: 'Lembre-se que a frequência é igual ao inverso do período.'
				}
			]
		}
	}
]

var MeuBloco = new Array();