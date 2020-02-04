document.observe("dom:loaded", function()
{
	/*habilitando as partes 
	ATENÇÃO: comentar este trecho para o software oficial 
	   
	for(var b = 0; b < Partes.length; b++)
	{
		if($('SalvaLocal').Pega(nomeSoft, 'automacao_atividade_'+PosicaoAtual.Atividade+'_parte_'+b) != 3)
			$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_'+PosicaoAtual.Atividade+'_parte_'+b, '2');
	}*/
	
});

var salvaLocalOK=true, documentoOK=false;


Event.observe(document, 'flash:SalvaLocal', function(ev)
			{
				salvaLocalOK=true;
				TentaCarregar();
			})

Event.observe(window, 'load', function() {

	documentoOK=true;
	TentaCarregar();
	
})

function TentaCarregar()
{
	if(salvaLocalOK && documentoOK)
	{
		BlocoNotas = new Blocao();	
		initAtividade('atividade_3','parte'+(PosicaoAtual.Parte+1));	
		if(PosicaoAtual.Parte==0)
		{
			Event.observe('parte1_q1_a_11', 'change', function(){
				//trataFloat('parte1_q1_a_11');
				setResp("atividade_3_parte1_q1_a_11",$('parte1_q1_a_11').value);});	
			Event.observe('parte1_q1_a_12', 'change', function(){		
				//trataFloat('parte1_q1_a_12');
				setResp("atividade_3_parte1_q1_a_12",$('parte1_q1_a_12').value);});	
			Event.observe('parte1_q1_a_21', 'change', function(){		
				//trataFloat('parte1_q1_a_21');
				setResp("atividade_3_parte1_q1_a_21",$('parte1_q1_a_21').value);});	
			Event.observe('parte1_q1_a_22', 'change', function(){		
				//trataFloat('parte1_q1_a_22');
				setResp("atividade_3_parte1_q1_a_22",$('parte1_q1_a_22').value);});	
		}
	}
}

function corrige_q_1_a(valor)	
{var applet = document.ggbApplet;
 var correto=true;   
 var v0=true;
 var v1=true;
 var v2=true;
 var v3=true;
 var px=[216,591,954,1318,1682,2055,2419,2786,3152,3527,3893,4260,4624,4993,5361,5734,6099,6471,6838,7209,7575,7943,8316,8691,9058,9420,9795];
 var py=[3.3,0.5,3.2,0.5, 3.4, 0.4, 3.2, 0.4, 3.4, 0.4, 3.2 ,0.4 ,3.4 ,0.4 ,3.2 ,0.4 ,3.3 ,0.4 ,3.2 ,0.4 ,3.1, 0.5, 3.1, 0.5, 3.1,  0.6, 3.1];
 
	valor[0] = processaExpressao(valor[0]);
	valor[1] = processaExpressao(valor[1]);
	valor[2] = processaExpressao(valor[2]);
	valor[3] = processaExpressao(valor[3]);

	if(isNaN(valor[0]))  v0=false;
	if(isNaN(valor[1]))  v1=false;
	if(isNaN(valor[2]))  v2=false;
	if(isNaN(valor[3]))  v3=false;
 
 
	if(v0 && v1 && v2 && v3)
	{
		valor[0]=parseFloat(valor[0]);
		valor[1]=parseFloat(valor[1]);
		valor[2]=parseFloat(valor[2]);
		valor[3]=parseFloat(valor[3]);
		for(var i= 0;i<27;i++)
		{
			var y=valor[0]*Math.sin(valor[1]/1440*px[i]+valor[2])+valor[3];
			if(Math.abs(parseFloat(y)-parseFloat(py[i]))>0.5) correto=false;
		}
	}
	else correto = false; 
	return[correto, correto && valor[1]<20, correto,correto];
} 
 	
function ggbOnInit() {
	
}

function tudoCerto()
{
	if(PosicaoAtual.Parte==0)
	{ 
		setResp('atividade_3',3);
		$('Mapinha').Salva('ondas', 'atividade_3', '3');
	}
} 
