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
		initAtividade('atividade_4','parte'+(PosicaoAtual.Parte+1));	
		if(PosicaoAtual.Parte==1)
		{
			Event.observe('parte2_q1_a_11', 'change', function(){		
				//trataFloat('parte2_q1_a_11');
				setResp("atividade_4_parte2_q1_a_11",$('parte2_q1_a_11').value);});	
			Event.observe('parte2_q1_a_12', 'change', function(){		
				valor=$('parte2_q1_a_12').value;
				valor=valor.replace(",",".");
				//if (!(isNaN(valor)) || valor!='')
				//{ 
//					valor=parseFloat(valor);
					//valor=valor.toFixed(3);
					//$('parte2_q1_a_12').value=valor;
//				}
				setResp("atividade_4_parte2_q1_a_12",$('parte2_q1_a_12').value);});		
			Event.observe('parte2_q1_a_21', 'change', function(){		
				//trataFloat('parte2_q1_a_21');
				setResp("atividade_4_parte2_q1_a_21",$('parte2_q1_a_21').value);});	
			Event.observe('parte2_q1_a_22', 'change', function(){		
				//trataFloat('parte2_q1_a_22');
				setResp("atividade_4_parte2_q1_a_22",$('parte2_q1_a_22').value);});	
		}
	
		if(PosicaoAtual.Parte==2)
		{
			Event.observe('parte3_q2_a_11', 'change', function(){		
				//trataFloat('parte3_q2_a_11');
				setResp("atividade_4_parte3_q2_a_11",$('parte3_q2_a_11').value);});	
			Event.observe('parte3_q2_a_12', 'change', function(){		
				//trataFloat('parte3_q2_a_12');
				setResp("atividade_4_parte3_q2_a_12",$('parte3_q2_a_12').value);});		
			Event.observe('parte3_q2_a_21', 'change', function(){		
				//trataFloat('parte3_q2_a_21');
				setResp("atividade_4_parte3_q2_a_21",$('parte3_q2_a_21').value);});	
			Event.observe('parte3_q2_a_22', 'change', function(){		
				//trataFloat('parte3_q2_a_22');
				setResp("atividade_4_parte3_q2_a_22",$('parte3_q2_a_22').value);});	
		}
		if(PosicaoAtual.Parte==3)
		{
			Event.observe('parte4_q3_a', 'change', function(){		
				//trataFloat('parte4_q3_a');
				setResp("atividade_4_parte4_q3_a",$('parte4_q3_a').value);});	
			Event.observe('parte4_q3_b', 'change', function(){		
				//trataFloat('parte4_q3_b');
				setResp("atividade_4_parte4_q3_b",$('parte4_q3_b').value);});	
		}
	}
}

function corrige_q_1_a(valor)	
{

	var v0=processaExpressao(valor[0]);;
	if(isNaN(v0) || v0!=20)
		v0=false;
	else v0=true;	
	
	var v1=processaExpressao(valor[1]);;
	if( isNaN(v1)  || Math.abs(v1-Math.PI/60)> 0.002) 
		v1=false;
	else v1=true;	
	
	var v2=processaExpressao(valor[2]);
	if(isNaN(v2) )
		v2=false
	else
	{
		if((v2< 0 && (v2%(2*Math.PI) < -1.62 || v2%(2*Math.PI) >-1.52)) || (v2>0 && (v2%(2*Math.PI) < 4.66 || v2%(2*Math.PI)> 4.76)))
			v2 =false;
		else v2=true;
	}	
	var v3=processaExpressao(valor[3]);;
	if(isNaN(v3) || v3!=24)
		v3=false;
	else v3=true;	
	
	if ( v0 && v1 && v2 && v3) 
	{
		setResp("atividade_4_parte2_q1_a_11_respondido",processaExpressao(valor[0]));
		setResp("atividade_4_parte2_q1_a_12_respondido",processaExpressao(valor[1]));
		setResp("atividade_4_parte2_q1_a_21_respondido",processaExpressao(valor[2]));
		setResp("atividade_4_parte2_q1_a_22_respondido",processaExpressao(valor[3]));
	}
	
	return [v0,v1,v2,v3];
} 
 	
function corrige_q_2_a(valor)
{	
	var v0=processaExpressao(valor[0]);
	if(isNaN(v0) ||  v0!=4)
		v0=false;
	else v0=true;	

	var v1=processaExpressao(valor[1]);
	if( isNaN(v1)  || Math.abs(v1-Math.PI/12)> 0.01) 
		v1=false;
	else v1=true;	

	var v2=processaExpressao(valor[2]);
	if(isNaN(v2) )
		v2=false
	else
	{
		if((v2< 0 && (v2%(2*Math.PI) < -1.62 || v2%(2*Math.PI) >-1.52)) || (v2>0 && (v2%(2*Math.PI) < 4.66 || v2%(2*Math.PI)> 4.76)))
			v2 =false;
		else v2=true;
	}	
	var v3=processaExpressao(valor[3]);
	
	if(isNaN(v3) || v3!=0)
		v3=false;
	else v3=true;	
	
	if ( v0 && v1 && v2 && v3) 
	{
		setResp("atividade_4_parte3_q2_a_11_respondido",processaExpressao(valor[0]));
		setResp("atividade_4_parte3_q2_a_12_respondido",processaExpressao(valor[1]));
		setResp("atividade_4_parte3_q2_a_21_respondido",processaExpressao(valor[2]));
		setResp("atividade_4_parte3_q2_a_22_respondido",processaExpressao(valor[3]));
	}
	
	
	return [v0,v1,v2,v3];
}

function corrige_q_3_a(valor)
{	var v=processaExpressao(valor);
	if(isNaN(v) || v==' ')
		return [false];
	if(v>47 && v<=48)
	{
	   return[true];
	}
	else return[false];
}

function corrige_q_3_b(valor)
{
	var v=processaExpressao(valor);
	if(isNaN(v) || v==' ')
		return [false];
	if(v==120)
	{
	   return[true];
	}
	else return[false];
}


function ggbOnInit(nome) {

	if (nome=="main_applet") {

		var applet = document.ggbApplet;
		
		applet.setLayer('ang1',4);
		applet.setLayer('ang2',4);
		applet.setLayer('ang3',4);
		applet.setLayer('ang4',4);
		applet.setLayer('ang5',4);
		applet.setLayer('ang6',4);
			
		if(PosicaoAtual.Parte==1) 
		{
			applet.setVisible('G',false);
			applet.setVisible('q_1',false);
			applet.setVisible('h_1',false);
			var a1 = getResp("atividade_4_parte2_q1_a_11_respondido");	
			if(a1!='undefined') applet.setValue('a1',a1);
			var b1 = getResp("atividade_4_parte2_q1_a_12_respondido");	

			if(b1!='undefined')
			{
				b1 = parseFloat(b1)*1000;
				applet.setValue('b1',b1);
			}
			var c1 = getResp("atividade_4_parte2_q1_a_21_respondido");	
			if(c1!='undefined') applet.setValue('c1',c1);
			var d1 = getResp("atividade_4_parte2_q1_a_22_respondido");	
			if(d1!='undefined') applet.setValue('d1',d1);
			applet.setVisible('f',true);
			applet.setVisible('a1',true);
			applet.setVisible('b1',true);
			applet.setVisible('c1',true);
			applet.setVisible('d1',true);
			//applet.setVisible('O',true);
			applet.setVisible('O_2',true);
			applet.setVisible('Oreta',true);
			applet.setVisible('texto17',true);
			applet.setVisible('texto28',true);
			applet.setVisible('texto41',true);
			applet.setVisible('texto42',true);
			
			applet.setValue('b2',0.05);
			applet.setValue('freq2',5);
		}	
		
		if(PosicaoAtual.Parte==2)
		{
			applet.setVisible('p_1',false);
			applet.setVisible('G_3',false);
			applet.setVisible('H',false);
			applet.setVisible('g_1',false);
			var a2 = getResp("atividade_4_parte3_q2_a_11_respondido");	
			if(a2!='undefined') applet.setValue('a2',a2);
			var b2 = getResp("atividade_4_parte3_q2_a_12_respondido");
			if(b2!='undefined') applet.setValue('b2',b2);
			var c2 = getResp("atividade_4_parte3_q2_a_21_respondido");	
			if(c2!='undefined') applet.setValue('c2',c2);
			var d2 = getResp("atividade_4_parte3_q2_a_22_respondido");	
			if(d2!='undefined') applet.setValue('d2',d2);
			applet.setVisible('z',true);
			applet.setVisible('a2',true);
			applet.setVisible('b2',true);
			applet.setVisible('c2',true);
			applet.setVisible('d2',true);
			//applet.setVisible('PZ',true);	
			applet.setVisible('PZ_1',true);	
			applet.setVisible('PZreta',true);	
			applet.setVisible('texto43',true);
			applet.setVisible('texto44',true);
			applet.setVisible('texto45',true);
			applet.setVisible('texto46',true);
			applet.setValue('freq2',5);
		}
		
		
		if(PosicaoAtual.Parte==3)
		{
			insereFuncoes();
			var a1 = getResp("atividade_4_parte2_q1_a_11_respondido");	
			if(a1!='undefined') applet.setValue('a1',a1);
			var b1 = getResp("atividade_4_parte2_q1_a_12_respondido");	
			if(b1!='undefined')
			{
				b1 = parseFloat(b1)*1000;
				applet.setValue('b1',b1);
			}
			var c1 = getResp("atividade_4_parte2_q1_a_21_respondido");	
			if(c1!='undefined') applet.setValue('c1',c1);
			var d1 = getResp("atividade_4_parte2_q1_a_22_respondido");	
			if(d1!='undefined') applet.setValue('d1',d1);
			var a2 = getResp("atividade_4_parte3_q2_a_11_respondido");	
			if(a2!='undefined') applet.setValue('a2',a2);
			var b2 = getResp("atividade_4_parte3_q2_a_12_respondido");	
			if(b2!='undefined') applet.setValue('b2',b2);
			var c2 = getResp("atividade_4_parte3_q2_a_21_respondido");	
			if(c2!='undefined') applet.setValue('c2',c2);
			var d2 = getResp("atividade_4_parte3_q2_a_22_respondido");	
			if(d2!='undefined') applet.setValue('d2',d2);
			
			

			applet.setValue('a1',20);
			applet.setValue('b1',1000*2*Math.PI/120);
			applet.setValue('c1',-Math.PI/2);
			applet.setValue('d1',24);

			applet.setValue('a2',4);
			applet.setValue('b2',2*Math.PI/24);
			applet.setValue('c2',-Math.PI/2);
			applet.setValue('d2',0);
			applet.setValue('freq2',5);

			applet.setValue('freq2',5);
			applet.setVisible('w',true);
			applet.setVisible('PW',true);
		}
	}
}

function tudoCerto()
{
	if(PosicaoAtual.Parte==3)
	{ 
		setResp('atividade_4',3);
		$('Mapinha').Salva('ondas', 'atividade_4', '3');
	}
} 

function selecionou_q_1_a()
{var applet = document.ggbApplet;
	applet.setVisible('w',false);
	applet.setVisible('J',false);
	applet.setVisible('texto9',false);
	applet.setVisible('f',true);
	applet.setVisible('N',true);
	applet.setvisible('texto6',true);
}

function selecionou_q_2_a()
{var applet = document.ggbApplet;
	applet.setVisible('w',false);
	applet.setVisible('J',false);
	applet.setVisible('texto9',false);
	applet.setVisible('f',true);
	applet.setVisible('N',true);
	applet.setvisible('texto6',true);
}

function selecionou_q_3_a()
{var applet = document.ggbApplet;
	applet.setVisible('f',false);
	applet.setVisible('N',false);
	applet.setVisible('texto6',false);
	applet.setVisible('w',true);
	applet.setVisible('J',true);
	applet.setvisible('texto9',true);
}
