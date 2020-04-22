document.observe("dom:loaded", function() {
    /*habilitando as partes 
    ATENÇÃO: comentar este trecho para o software oficial 
       
    for(var b = 0; b < Partes.length; b++)
    {
    	if($('SalvaLocal').Pega(nomeSoft, 'automacao_atividade_'+PosicaoAtual.Atividade+'_parte_'+b) != 3)
    		$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_'+PosicaoAtual.Atividade+'_parte_'+b, '2');
    }*/

});
var salvaLocalOK = true,
    documentoOK = false;


Event.observe(document, 'flash:SalvaLocal', function(ev) {
    salvaLocalOK = true;
    TentaCarregar();
})

Event.observe(window, 'load', function() {

    documentoOK = true;
    TentaCarregar();

})

function TentaCarregar() {
    if (salvaLocalOK && documentoOK) {
        BlocoNotas = new Bloco();
        initAtividade('atividade_2', 'parte' + (PosicaoAtual.Parte + 1));
        if (PosicaoAtual.Parte == 0) {
            Event.observe('parte1_q1_a_11', 'change', function() {
                //trataFloat('parte1_q1_a_11');
                setResp("atividade_2_parte1_q1_a_11", $('parte1_q1_a_11').value);
            });
            Event.observe('parte1_q1_a_12', 'change', function() {
                //trataFloat('parte1_q1_a_12');
                setResp("atividade_2_parte1_q1_a_12", $('parte1_q1_a_12').value);
            });
            Event.observe('parte1_q1_a_13', 'change', function() {
                //trataFloat('parte1_q1_a_13');
                setResp("atividade_2_parte1_q1_a_13", $('parte1_q1_a_13').value);
            });
            Event.observe('parte1_q2_a_11', 'change', function() {
                //trataFloat('parte1_q2_a_11');
                setResp("atividade_2_parte1_q2_a_11", $('parte1_q2_a_11').value);
            });
        }
    }
}

function corrige_q_1_a(valor) {
    valor[0] = processaExpressao(valor[0]);
    valor[1] = processaExpressao(valor[1]);
    valor[2] = processaExpressao(valor[2]);
    return [valor[0] == 0.35, valor[1] <= 1.2 && valor[1] >= 1.1, valor[2] == 4];
}

function corrige_q_2_a(valor) {
    valor = processaExpressao(valor);
    if (isNaN(valor))
        return [false];
    var temp = valor;
    if (valor < 1.2) {
        while (temp < 1.2) temp = parseFloat(temp) + 2 * Math.PI;
    }
    if (valor > 1.7) {
        while (temp > 1.7) temp = parseFloat(temp) - 2 * Math.PI;
    }
    if (temp >= 1.2 && temp <= 1.7) return [true];
    return [false];
}

function ggbOnInit() {
    var applet = document.ggbApplet;

    if (PosicaoAtual.Parte == 1) {
        applet.setVisible('a', false);
        applet.setVisible('b', false);
        applet.setVisible('d', false);
    }
    var a = getResp("atividade_2_parte1_q1_a_11");
    if ((a != 'undefined') && !(isNaN(a))) applet.setValue('a', a);
    var b = getResp("atividade_2_parte1_q1_a_12");
    if ((b != 'undefined') && !(isNaN(b))) applet.setValue('b', b);
    var c = getResp("atividade_2_parte1_q2_a_11");
    if ((c != 'undefined') && !(isNaN(c))) applet.setValue('c', c);
    var d = getResp("atividade_2_parte1_q1_a_13");
    if ((d != 'undefined') && !(isNaN(d))) applet.setValue('d', d);
}

function tudoCerto() {
    if (PosicaoAtual.Parte == 0) {
        setResp('atividade_2', 3);
        $('Mapinha').Salva('ondas', 'atividade_2', '3');
    }
}