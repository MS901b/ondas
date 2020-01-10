function atv1_volta()
{var applet = document.ggbApplet;

	if(!(applet.isAnimationRunning() )) 
	{	
		applet.unregisterObjectUpdateListener('b');
		applet.refreshViews();
		applet.setValue('alpha_1',0);
		applet.setAnimating('alpha_1',true);
		applet.startAnimation();
	}
}

function atv1_amplitude_auto()
{var applet = document.ggbApplet;

	var o=applet.getValue('o');
	var q=applet.getValue('q');
	var r=applet.getValue('r');
	if(o==0)
	{
		if(q==1)
		{
			var ang=applet.getXCoord('N');
			applet.setValue('alpha',ang);
			applet.setValue('q',0);
		}
		if(r=='true')
		{
			var ang=applet.getValue('alfa');
			applet.setValue('alpha',ang);
			applet.setValue('r',0);
		}
		applet.setValue('o',1);
		applet.setAnimating('alpha',true);
		applet.startAnimation();
	}
}

function atv1_amplitude_ciclo()
{var applet = document.ggbApplet;

	if(applet.isAnimationRunning())
	{
		applet.stopAnimation();
	}
	var o=applet.getValue('o');
	var q=applet.getValue('q');
	var r=applet.getValue('r');
	if(r==0)
	{
		if(o==1)
		{
			var ang=applet.getValue('alpha');
			applet.setValue('alfa',ang);
			applet.setValue('o',0);
		}
		if(q==1)
		{
			var ang=applet.getXCoord('N');
			applet.setValue('alfa',ang);
			applet.setValue('q',0);
		}
		applet.setValue('r',1);
	}
}

function atv1_amplitude_grafico()
{var applet = document.ggbApplet;

	if(applet.isAnimationRunning())
	{
		applet.stopAnimation();
	}
	var o=applet.getValue('o');
	var q=applet.getValue('q');
	var r=applet.getValue('r');
	if(q==0)
	{
		if(o==1)
		{
			applet.setValue('o',0);
		}
		if(r==1)
		{
			applet.setValue('r',0);
		}
		applet.setValue('q',1);
	}	
}


function atv4_rodar()
{var applet = document.ggbApplet;

	if(!(applet.isAnimationRunning() )) 
	{	
		applet.setAnimating('espaco',true);
		applet.setValue('espaco',0);
		applet.startAnimation();
	}
	else
	{
		applet.stopAnimation();
	}
}


function atv4_alturas()
{ var applet = document.ggbApplet;

	if(!applet.getVisible('i_1'))
	{
		applet.setVisible('i_1',true);
		applet.setVisible('G_2',true);
		applet.setVisible('q',true);
		applet.setVisible('p',true);
		applet.setVisible('G',true);
		applet.setVisible('g_1',true);
		applet.setVisible('h_1',true);
	}
	else
	{
		applet.setVisible('i_1',false);
		applet.setVisible('G_2',false);
		applet.setVisible('q',false);
		applet.setVisible('p',false);
		applet.setVisible('G',false);
		applet.setVisible('g_1',false);
		applet.setVisible('h_1',false);
	}
}


function animeDelta()
{var applet = document.ggbApplet;

	var min=applet.getValue('minmax');
	if(min<0) 
	{
		var n = applet.getValue('a');
		var raiz=applet.getValue('raiz_1');
		raiz=parseFloat(raiz);
		n=raiz-2*n;
		applet.setValue('minimo',n);
	}
	if(!(applet.isAnimationRunning() )) 
	{	
		applet.setAnimating('alpha_1',true);
		applet.startAnimation();
	}
	else
	{
		applet.stopAnimation();
	}
}

function verC()
{ var applet = document.ggbApplet;

	applet.setVisible('c',true);
}

function atv1_limpar_rastro()
{var applet = document.ggbApplet;
	applet.refreshViews();
}


function denovo()
{ 
	if(this.resultado=='sim')
	{ 
		setResp('atividade_1_parte5_nova',1);
		geraFuncao();
		window.location.reload();
		//$('conteudo').scrollTo();	
	}

}


function geraFuncao()
{ var applet = document.ggbApplet;
   
    
	if(getResp('atividade_1_parte5_nova')==1 || getResp('atividade_1_parte5_nova')=='undefined')
    {
		var a=100*Math.random(); 
		a=a%5; a=a.toFixed(1); 
		if((a>-1) && (a<1))
		{
			if(a<0) a=a-1;
			else a=a+1;
			a=parseFloat(a);
		}
		var b=100*Math.random();
		b=b%5; b=b.toFixed(1); 
		if((b>-0.5) && b<(0.5))
		{
			if(b<0) b=b-0.5;
			else b=b+0.5;
			b=parseFloat(b);
		}
		var c=100*Math.random(); 
		c=c%5; c=c.toFixed(1); 
		c=parseFloat(c);
		var d=100*Math.random(); 
		d=d%5; d=d.toFixed(1); 
		d=parseFloat(d);
		applet.setValue('a_1',a);
		applet.setValue('b_1',b);
		applet.setValue('c_1',c);
		applet.setValue('d_1',d);
		setResp('atividade_1_parte5_nova',0);
		setResp('atividade_1_parte5_a',a);
		setResp('atividade_1_parte5_b',b);
		setResp('atividade_1_parte5_c',c);
		setResp('atividade_1_parte5_d',d);
		apagaResp('atividade_1_parte5_q12_a_11');
		apagaResp('atividade_1_parte5_q12_a_12');
		apagaResp('atividade_1_parte5_q12_a_21');
		apagaResp('atividade_1_parte5_q12_a_22');
		apagaResp('atividade_1_parte5_q13_a_11');
		apagaResp('atividade_1_parte5_q13_a_12');
		apagaResp('atividade_1_parte5_q13_b');
		apagaResp('atividade_1_parte5_q13_c');
		apagaResp('atividade_1_parte5_q13_d');
	}
	else
	{
		var a=getResp('atividade_1_parte5_a');
		var b=getResp('atividade_1_parte5_b');
		var c=getResp('atividade_1_parte5_c');
		var d=getResp('atividade_1_parte5_d');
		a=parseFloat(a);
		b=parseFloat(b);
		c=parseFloat(c);
		d=parseFloat(d);
		applet.setValue('a_1',a);
		applet.setValue('b_1',b);
		applet.setValue('c_1',c);
		applet.setValue('d_1',d);
	}
	applet.setVisible('f',true);
}

function insereFuncoes() {

	var h1_a = roundNumber(getResp("atividade_4_parte2_q1_a_11_respondido"),2);
	var h1_b = roundNumber(getResp("atividade_4_parte2_q1_a_12_respondido"),2);
	var h1_c = roundNumber(getResp("atividade_4_parte2_q1_a_21_respondido"),2);
	var h1_d = roundNumber(getResp("atividade_4_parte2_q1_a_22_respondido"),2);
	var h1= h1_a + ' sen(' + h1_b + ' x '; 
	
	if(h1_c >= 0) h1 = h1 + '+ ' + h1_c + ')';
	else h1 = h1 + h1_c + ')';
	
	if(h1_d >= 0) h1 = h1 + ' + ' + h1_d;
	else h1 = h1 + h1_d;
	
	var h2_a = roundNumber(getResp("atividade_4_parte3_q2_a_11_respondido"),2);
	var h2_b = roundNumber(getResp("atividade_4_parte3_q2_a_12_respondido"),2);
	var h2_c = roundNumber(getResp("atividade_4_parte3_q2_a_21_respondido"),2);
	var h2_d = roundNumber(getResp("atividade_4_parte3_q2_a_22_respondido"),2);
	var h2= h2_a + ' sen(' + h2_b + ' x ';
	
	if(h2_c >= 0) h2 = h2 + '+ ' + h2_c + ')';
	else h2 = h2 + h2_c + ')';
	
	if(h2_d >= 0) h2 = h2 + ' + ' + h2_d;
	else h2 = h2 + h2_d;
	
	var elem1 = document.getElementById('funcao_h1');
			elem1.innerHTML = h1;
			
	var elem2 = document.getElementById('funcao_h2');
			elem2.innerHTML = h2;		
		
	var elem1 = document.getElementById('componente1');
			elem1.innerHTML = h1;
			
	if(h2_a >= 0) h2 = ' + '+ h2
	
	var elem2 = document.getElementById('componente2');
			elem2.innerHTML = h2;		
			
			
	}
	
	function plotarMare()
	{
		var applet = document.ggbApplet;
		var i=1,j=1;
		
		if(!applet.getVisible("P_{94}"))
		{
			for(i=1;i<10;i++)
			{
				for(j=1;j<5;j++)
				{
					applet.setVisible("P_{"+i+j+"}", true);
				}
			}
		}
		else
		{
			for(i=1;i<10;i++)
			{
				for(j=1;j<5;j++)
				{
					applet.setVisible("P_{"+i+j+"}", false);
				}
			}
		}
	}
		
	function ligueospontos()
	{
		var applet = document.ggbApplet;	
		var i=1,j=1;
		
		if(!applet.getVisible("s_{26}"))
		{
			for(i=0;i<3;i++)
			{
				for(j=0;j<10;j++)
				{
					applet.setVisible("s_{"+i+j+"}", true);
				}
			}
		}
		else
		{
			for(i=0;i<3;i++)
			{
				for(j=0;j<10;j++)
				{
					applet.setVisible("s_{"+i+j+"}", false);
				}
			}
		}
	}
		
function roundNumber(num, dec) {
	var result = Math.round( Math.round( num * Math.pow( 10, dec + 1 ) ) / Math.pow( 10, 1 ) ) / Math.pow(10,dec);
	return result;
}
		
		