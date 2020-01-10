/********************
 * Funcoes do Flash *
 ********************/

// Retorna uma Array com todas as inputs que começam com "parte"
function pegaNomesResp(id) {
	var allElements = $$('[id^='+id+']');
	var allNames = Array();
	for (var i=0;i<allElements.length;i++) 
	{
		allNames.push(allElements[i].id);
	}
	return allNames.uniq();
}

function setMultiplaEscolha(id,i,qtd)
{
	for(var k=1;k<=qtd;k++)
	{
		if(k!=i) setResp(id+k,false);
		else setResp(id+i,true);
	}
}	


//Funcao que pega no flash o valor da resposta do id passado.
function getResp(id) {
	return $('SalvaLocal').Pega(nomeSoft,id);
}




//Funcao que guarda no flash o valor da resposta do id passado.
function setResp(id,valor) {
	$('SalvaLocal').Salva(nomeSoft,id,valor);
}

// Apaga todas as resposta guardadas.
function apagaTodasResp() {
	return ($('SalvaLocal').ApagaTudo(nomeSoft));
}

function apagaResp(valor) {
	return $('SalvaLocal').Apaga(nomeSoft,valor);
}

// Funções de máximo e mínimo para Array. Não testado no IE.
Array.prototype.max = function() {
	var max = this[0];
	var len = this.length;
	for (var i = 1; i < len; i++) if (this[i] > max) max = this[i];
	return max;
}

Array.prototype.min = function() {
	var min = this[0];
	var len = this.length;
	for (var i = 1; i < len; i++) if (this[i] < min) min = this[i];
	return min;
}

// a função trataFloat recebe como argumento um valor, substitui "," por "." e verfica se o valor é um número
//  em caso afirmativo, a função atualiza o número na tela com apenas duas casas decimais. 

function trataFloat(id)
{
	var valor=$(id).value;
	valor=valor.replace(",",".");
	if(isNaN(valor) || valor=='')
		return;
	if (!(isNaN(valor)) || valor!='')
	{ 
		valor=parseFloat(valor);
		valor=valor.toFixed(2);
		$(id).value=valor;
		
	}
}



function validaExpressao(valor)
{
	valor = String(valor).replace(/\,/g,".");
	valor = valor.replace(/[0-9\+\-\*\/\(\)π\.]/gi,"");
	valor = valor.replace(/pi/gi,"");
	valor = valor.replace(/\s/gi,"");
	if (valor.length==0) return true;
	else return false;
}

function processaExpressao(valor)
{
	if ((valor!='') && (validaExpressao(valor)))
	{
		valor = String(valor).replace(/pi/gi,'π');
		valor = colocaOperacoesPI(valor);
		valor = valor.replace(/π/gi,'Math.PI');
		valor = valor.replace(/,/g,".");
		try
		{
			eval('var resp='+valor);
		}
		catch (err) {var resp = NaN};
		return resp;
	}
	else return NaN;
}

function colocaOperacoesPI(valor)
{
	valor = String(valor).replace(/([0-9\)π\.])π/g,'$1*π');
	valor = String(valor).replace(/π([0-9\(π\.])/g,'π*$1');
	return valor;
}

/**
 * Funcao que carrega os valores preenchidas pelo aluno. É chamada no onLoad de cada parte de uma atividade.
 */
function initAtividade(atv,id) {
	if(getResp(atv)==1) setResp(atv,2);
	
	var respostasId = new Array();
	respostasId = pegaNomesResp(id);
	
	for (var i = 0; i < respostasId.length; i++) {
		carregaValorResposta(atv,respostasId[i]);
	}
}

/**
 * Carrega a Resposta quando o aluno dá refresh na página.
 * @param {Object} id 	id da resposta
 */
function carregaValorResposta(atv,id) {
	var elem = $(id);
	var Resp;
	
	Resp = getResp(atv+'_'+id);
	if (Resp=="undefined") Resp=null
	if (elem.type=='radio')
	{
		if(Resp=='true') elem.setChecked(true);
		else elem.setChecked(false);
	};
	if (elem.type=='text')
	{		
		elem.value=((Resp!=null) ? Resp : '');
	}
}

