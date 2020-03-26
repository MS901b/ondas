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
var ggbOK = false;


Event.observe(document, 'flash:SalvaLocal', function(ev) {
    salvaLocalOK = true;
    TentaCarregar();
})

Event.observe(window, 'load', function() {

    documentoOK = true;
    TentaCarregar();

})

function TentaCarregar() {
    if (salvaLocalOK && documentoOK && ggbOK) {
        BlocoNotas = new Blocao();

        initAtividade('atividade_1', 'parte' + (PosicaoAtual.Parte + 1));
        if (PosicaoAtual.Parte == 0) {
            Event.observe('parte1_q1_a_1', 'change', function() {
                setMultiplaEscolha('atividade_1_parte1_q1_a_', 1, 4);
            });
            Event.observe('parte1_q1_a_2', 'change', function() {
                setMultiplaEscolha('atividade_1_parte1_q1_a_', 2, 4);
            });
            Event.observe('parte1_q1_a_3', 'change', function() {
                setMultiplaEscolha('atividade_1_parte1_q1_a_', 3, 4);
            });
            Event.observe('parte1_q1_a_4', 'change', function() {
                setMultiplaEscolha('atividade_1_parte1_q1_a_', 4, 4);
            });
            Event.observe('parte1_q2_a', 'change', function() {
                //trataFloat('parte1_q2_a');
                setResp("atividade_1_parte1_q2_a", $('parte1_q2_a').value);
            });
            Event.observe('parte1_q3_a', 'change', function() {
                //trataFloat('parte1_q3_a');
                setResp("atividade_1_parte1_q3_a", $('parte1_q3_a').value);
            });
        }
        if (PosicaoAtual.Parte == 1) {
            if (getResp('atividade_1_setado') == 1) {
                $('atividade1_valor_a').value = getResp('atividade_1_valor_a');
                var posicao = { Parte: 1, Questao: 'parte2_q5', Item: 0 };
                PegaInicial(posicao).desabilita_semscroll(false);
            }
            Event.observe('parte2_q4_a_1', 'change', function() {
                setMultiplaEscolha('atividade_1_parte2_q4_a_', 1, 4);
            });
            Event.observe('parte2_q4_a_2', 'change', function() {
                setMultiplaEscolha('atividade_1_parte2_q4_a_', 2, 4);
            });
            Event.observe('parte2_q4_a_3', 'change', function() {
                setMultiplaEscolha('atividade_1_parte2_q4_a_', 3, 4);
            });
            Event.observe('parte2_q4_a_4', 'change', function() {
                setMultiplaEscolha('atividade_1_parte2_q4_a_', 4, 4);
            });
            Event.observe('parte2_q5_a_11', 'change', function() {
                valor = $('parte2_q5_a_11').value;
                valor = valor.replace(",", ".");
                if (!(isNaN(valor)) && valor != '') {
                    valor = parseFloat(valor);
                    valor = valor.toFixed(1);
                    $('parte2_q5_a_11').value = valor;
                }
                setResp("atividade_1_parte2_q5_a_11", $('parte2_q5_a_11').value);
            });
            Event.observe('parte2_q5_b_11', 'change', function() {
                valor = $('parte2_q5_b_11').value;
                valor = valor.replace(",", ".");
                if (!(isNaN(valor)) && valor != '') {
                    valor = parseFloat(valor);
                    valor = valor.toFixed(1);
                    $('parte2_q5_b_11').value = valor;
                }
                setResp("atividade_1_parte2_q5_b_11", $('parte2_q5_b_11').value);
            });
            Event.observe('parte2_q6_a', 'change', function() {
                //trataFloat('parte2_q6_a');
                setResp("atividade_1_parte2_q6_a", $('parte2_q6_a').value);
            });
        }

        if (PosicaoAtual.Parte == 2) {
            Event.observe('parte3_q7_a', 'change', function() {
                //trataFloat('parte3_q7_a');
                setResp("atividade_1_parte3_q7_a", $('parte3_q7_a').value);
            });
            Event.observe('parte3_q7_b_11', 'change', function() {
                //trataFloat('parte3_q7_b_11');
                setResp("atividade_1_parte3_q7_b_11", $('parte3_q7_b_11').value);
            });
            Event.observe('parte3_q7_b_12', 'change', function() {
                //trataFloat('parte3_q7_b_12');
                setResp("atividade_1_parte3_q7_b_12", $('parte3_q7_b_12').value);
            });
            Event.observe('parte3_q8_a', 'change', function() {
                //trataFloat('parte3_q8_a');
                setResp("atividade_1_parte3_q8_a", $('parte3_q8_a').value);
            });
            Event.observe('parte3_q8_b_11', 'change', function() {
                trataFloat('parte3_q8_b_11');
                setResp("atividade_1_parte3_q8_b_11", $('parte3_q8_b_11').value);
            });
            Event.observe('parte3_q8_b_12', 'change', function() {
                //trataFloat('parte3_q8_b_12');
                setResp("atividade_1_parte3_q8_b_12", $('parte3_q8_b_12').value);
            });
            Event.observe('parte3_q9_a', 'change', function() {
                //trataFloat('parte3_q9_a');
                setResp("atividade_1_parte3_q9_a", $('parte3_q9_a').value);
            })

            var applet = document.ggbApplet;
            applet.registerObjectUpdateListener('alpha_1', "pararAnimacao");
            applet.registerObjectUpdateListener('b', "atv1_limpar_rastro");


        }
        if (PosicaoAtual.Parte == 3) {
            Event.observe('parte4_q10_a_1', 'change', function() {
                setMultiplaEscolha('atividade_1_parte4_q10_a_', 1, 4);
            });
            Event.observe('parte4_q10_a_2', 'change', function() {
                setMultiplaEscolha('atividade_1_parte4_q10_a_', 2, 4);
            });
            Event.observe('parte4_q10_a_3', 'change', function() {
                setMultiplaEscolha('atividade_1_parte4_q10_a_', 3, 4);
            });
            Event.observe('parte4_q10_a_4', 'change', function() {
                setMultiplaEscolha('atividade_1_parte4_q10_a_', 4, 4);
            });
            Event.observe('parte4_q11_a', 'change', function() {
                //trataFloat('parte4_q11_a');
                setResp("atividade_1_parte4_q11_a", $('parte4_q11_a').value);
            });
        }
        if (PosicaoAtual.Parte == 4) {
            Event.observe('parte5_q12_a_11', 'change', function() {
                //trataFloat('parte5_q12_a_11');
                setResp("atividade_1_parte5_q12_a_11", $('parte5_q12_a_11').value);
            });
            Event.observe('parte5_q12_a_12', 'change', function() {
                //trataFloat('parte5_q12_a_12');
                setResp("atividade_1_parte5_q12_a_12", $('parte5_q12_a_12').value);
            });
            Event.observe('parte5_q12_a_21', 'change', function() {
                //trataFloat('parte5_q12_a_21');
                setResp("atividade_1_parte5_q12_a_21", $('parte5_q12_a_21').value);
            });
            Event.observe('parte5_q12_a_22', 'change', function() {
                //trataFloat('parte5_q12_a_22');
                setResp("atividade_1_parte5_q12_a_22", $('parte5_q12_a_22').value);
            });
            Event.observe('parte5_q13_a_11', 'change', function() {
                //trataFloat('parte5_q13_a_11');
                setResp("atividade_1_parte5_q13_a_11", $('parte5_q13_a_11').value);
                $('corretor_q13_a_11').removeClassName('correto');
                $('corretor_q13_a_11').removeClassName('incorreto');
            });
            Event.observe('parte5_q13_a_12', 'change', function() {
                //trataFloat('parte5_q13_a_12');
                setResp("atividade_1_parte5_q13_a_12", $('parte5_q13_a_12').value);
                $('corretor_q13_a_12').removeClassName('correto');
                $('corretor_q13_a_12').removeClassName('incorreto');
            });
            Event.observe('parte5_q13_b', 'change', function() {
                //trataFloat('parte5_q13_b');
                setResp("atividade_1_parte5_q13_b", $('parte5_q13_b').value);
            });
            Event.observe('parte5_q13_c', 'change', function() {
                //trataFloat('parte5_q13_c');
                setResp("atividade_1_parte5_q13_c", $('parte5_q13_c').value);
            });
            Event.observe('parte5_q13_d', 'change', function() {
                //trataFloat('parte5_q13_d');
                setResp("atividade_1_parte5_q13_d", $('parte5_q13_d').value);
            });

            geraFuncao();

        }
    }
}

function corrige_q_1_a(valor) {
    return [valor[0] ? false : null, valor[1] ? true : null, valor[2] ? false : null, valor[3] ? false : null];
}

function corrige_q_2_a(valor) {
    valor = processaExpressao(valor);;
    if (isNaN(valor))
        return [false];
    if (Math.abs(valor - (2 * Math.PI)) < 0.04) return [true];
    return [false];
}

function corrige_q_3_a(valor) {
    var v = processaExpressao(valor);

    if (isNaN(v))
        return [false];
    if (Math.abs(v - (0.5 * Math.PI)) < 0.02) {
        return [true];
    }
    if (Math.abs(v + (1.5 * Math.PI)) < 0.02) {
        return [true]
    }
    return [false];
}

function corrige_q_4_a(valor) {
    return [valor[0] ? false : null, valor[1] ? false : null, valor[2] ? true : null, valor[3] ? false : null];
}

function corrige_q_5_a(valor) {
    var applet = document.ggbApplet;

    var a = getResp('atividade_1_valor_a');
    var maior = processaExpressao(valor[0]);
    if (!isNaN(maior)) {
        a = parseFloat(a);
        maior = parseFloat(maior);
        if ((a >= 0 && maior == a) || (a <= 0 && maior == -a)) return [true];
    }
    return [false];
}

function corrige_q_5_b(valor) {
    var applet = document.ggbApplet;

    var a = getResp('atividade_1_valor_a');
    var menor = processaExpressao(valor[0]);
    if (!isNaN(menor)) {
        a = parseFloat(a);
        menor = parseFloat(menor);
        if ((a >= 0 && menor == -a) || (a <= 0 && menor == a)) return [true];
    }
    return [false];
}

function corrige_q_5_c(valor) {
    var applet = document.ggbApplet;

    var a = getResp('atividade_1_valor_a');
    var amplitude = processaExpressao(valor[0]);
    if (!isNaN(amplitude)) {
        amplitude = parseFloat(amplitude);
        if (amplitude == 2 * Math.abs(a)) return [true];
    }
    return [false];
}

function corrige_q_6_a(valor) {
    var v = processaExpressao(valor);
    if (isNaN(v))
        return [false];
    if (v == 4 || v == -4) {
        return [true];
    }
    return [false];
}

function corrige_q_7_a(valor) {
    var v = processaExpressao(valor);
    if (isNaN(v))
        return [false];
    if (v == 3) {
        return [true];
    }
    return [false];
}

function corrige_q_7_b(valor) {
    var v0 = processaExpressao(valor[0]);
    var r0 = false;
    var v1 = processaExpressao(valor[1]);
    var r1 = false;
    if (!isNaN(v0) && v0 == 1)
        r0 = true;
    if (!isNaN(v1) && v1 == 3)
        r1 = true;
    return [r0, r1];
}

function corrige_q_8_a(valor) {
    var v = processaExpressao(valor);
    if (isNaN(v))
        return [false];
    if (v == 4) {
        return [true];
    }
    return [false];
}

function corrige_q_8_b(valor) {
    var v0 = processaExpressao(valor[0]);
    var r0 = false;
    var v1 = processaExpressao(valor[1]);
    var r1 = false;
    if (!isNaN(v0) && v0 == 1)
        r0 = true;
    if (!isNaN(v1) && v1 == 4)
        r1 = true;
    return [r0, r1];
}


function corrige_q_9_a(valor) {
    valor[0] = processaExpressao(valor[0]);
    return [Math.abs(valor[0] - (Math.PI) / 3) < 0.02];
}


function corrige_q_10_a(valor) {
    return [valor[0] ? true : null, valor[1] ? false : null, valor[2] ? false : null, valor[3] ? false : null];
}

function corrige_q_11_a(valor) {
    var v = processaExpressao(valor);
    if (isNaN(v) || v == ' ')
        return [false];
    if (v == 1) {
        return [true];
    }
    return [false];
}

function corrige_q_12_a(valor) {
    var applet = document.ggbApplet;

    var a = processaExpressao(valor[0]);
    var b = processaExpressao(valor[1]);
    var c = processaExpressao(valor[2]);
    var d = processaExpressao(valor[3]);
    var v0 = false;
    var v1 = false;
    var v2 = false;
    var v3 = false;
    var aggb = applet.getValue('a_1');
    aggb = parseFloat(aggb);
    aggb = aggb.toFixed(1);
    var bggb = applet.getValue('b_1');
    bggb = parseFloat(bggb);
    var cggb = applet.getValue('c_1');
    cggb = parseFloat(cggb);
    var dggb = applet.getValue('d_1');
    dggb = parseFloat(dggb);
    dggb = dggb.toFixed(1);
    if (!isNaN(a) && a != ' ') {
        a = parseFloat(a);
        a = a.toFixed(1);
        if (Math.abs(aggb - a) <= 0.2) {
            v0 = true;
            applet.setValue('a12', a);
            applet.setValue('a', a);
        }
        if (!isNaN(c) && c != ' ') {
            c = parseFloat(c);
            if ((aggb > 0 && a < 0) || (aggb < 0 && a > 0)) { cggb = parseFloat(cggb) + Math.PI; }
            if (c <= cggb) {
                var temp = c;
                while (temp <= cggb) temp = temp + 2 * Math.PI;
                if (temp - cggb <= 0.4 || cggb - temp + 2 * Math.PI < 0.4) {
                    v2 = true;
                    applet.setValue('c12', c);
                    applet.setValue('c', c);
                }
            } else {
                var temp = cggb;
                while (temp <= c) temp = temp + 2 * Math.PI;
                if (temp - c <= 0.4 || c - temp + 2 * Math.PI < 0.4) {
                    v2 = true;
                    applet.setValue('c12', c);
                    applet.setValue('c', c);
                }
            }
        }
    }
    if (!isNaN(b) && b != ' ') {
        b = parseFloat(b);
        b = b.toFixed(1);
        if (Math.abs(Math.abs(b) - Math.abs(bggb.toFixed(1))) < 0.2) {
            v1 = true;
            applet.setValue('b12', b);
            applet.setValue('b', b);
        }
    }
    if (!isNaN(d) && d != ' ') {
        d = parseFloat(d);
        d = d.toFixed(1);
        if (Math.abs(d - dggb) <= 0.4) {
            v3 = true;
            applet.setValue('d12', d);
            applet.setValue('d', d);
        }
    }
    if (v0 && v1 && v2 && v3) {
        applet.setVisible('texto1', false);
        applet.setVisible('texto2', false);
        applet.setVisible('texto4', false);
        applet.setVisible('texto5', false);
        applet.setVisible('texto6', false);
        applet.setVisible('texto7', false);
        applet.setVisible('texto8', false);
        applet.setVisible('texto9', false);
        applet.setVisible('formula', true);
    }
    return [v0, v1, v2, v3];
}

function corrige_q_13_a(valor) {
    var applet = document.ggbApplet;

    var aggb = applet.getValue('a_1');
    var minmax = applet.getValue('minmax');

    var valor0 = processaExpressao($('parte5_q13_a_11').value);
    var valor1 = processaExpressao($('parte5_q13_a_12').value);

    $('corretor_q13_a_11').removeClassName('correto');
    $('corretor_q13_a_11').removeClassName('incorreto');
    $('corretor_q13_a_12').removeClassName('correto');
    $('corretor_q13_a_12').removeClassName('incorreto');

    if (valor1 - valor0 <= 2 * aggb + 0.2 && valor1 - valor0 >= 2 * aggb - 0.2) {
        var y1 = applet.getValue('y_1');
        if (minmax < 0) {
            if (valor0 >= (y1 - 2 * aggb) - 0.5 && valor0 <= (y1 - 2 * aggb) + 0.5) {
                $('corretor_q13_a_11').addClassName('correto');
                if (valor1 >= y1 - 0.5 && valor1 <= y1 + 0.5) {
                    $('corretor_q13_a_12').addClassName('correto');
                    return [true];
                } else {
                    $('corretor_q13_a_12').addClassName('incorreto');
                    return [false];
                }
            } else {
                $('corretor_q13_a_11').addClassName('incorreto');
                if (valor1 >= y1 - 0.5 && valor1 <= y1 + 0.5) {
                    $('corretor_q13_a_12').addClassName('correto');
                    return [false];
                } else {
                    $('corretor_q13_a_12').addClassName('incorreto');
                    return [false];
                }
            }
        }
        if (minmax > 0) {
            if (valor0 <= y1 + 0.5 && valor0 >= y1 - 0.5) {
                $('corretor_q13_a_11').addClassName('correto');
                if (valor1 <= (y1 + 2 * aggb) + 0.5 && valor1 >= (y1 + 2 * aggb) - 0.5) {
                    $('corretor_q13_a_12').addClassName('correto');
                    return [true];
                } else {
                    $('corretor_q13_a_12').addClassName('incorreto');
                    return [false];
                }
            } else {
                $('corretor_q13_a_11').addClassName('incorreto');
                if (valor1 <= (y1 + 2 * aggb) + 0.5 && valor1 >= (y1 + 2 * aggb) - 0.5) {
                    $('corretor_q13_a_12').addClassName('correto');
                    return [false];
                } else {
                    $('corretor_q13_a_12').addClassName('incorreto');
                    return [false];
                }
            }
        }
    } else {
        $('corretor_q13_a_11').addClassName('incorreto');
        $('corretor_q13_a_12').addClassName('incorreto');
        return [false];
    }
}

function corrige_q_13_b(valor) {
    var applet = document.ggbApplet;

    var a = processaExpressao(valor);
    var aggb = applet.getValue('a_1');

    if (!isNaN(a) && a != ' ') {
        a = a;
        if (Math.abs(Math.abs(aggb) - Math.abs(a)) <= 0.15) return [true];
        return [false]
    } else return [false];
}

function corrige_q_13_c(valor) {
    var applet = document.ggbApplet;

    var b = processaExpressao(valor);
    var bggb = applet.getValue('b_1');

    if (!isNaN(b) && b != ' ') {
        if (Math.abs(parseFloat(b) - parseFloat(2 * Math.PI / bggb)) <= 0.3) return [true];
    }
    return [false];
}

function corrige_q_13_d(valor) {
    var applet = document.ggbApplet;

    var b = processaExpressao(valor);
    var bggb = applet.getValue('b_1');
    bggb = parseFloat(bggb);
    bggb = bggb.toFixed(1);
    var freq = bggb / (2 * Math.PI);
    if (!isNaN(b) && b != ' ' && b <= freq + 0.1 && b >= freq - 0.1) return [true];

    return [false];
}

function ggbOnInit() {

    ggbOK = true;
    TentaCarregar();
}


function pararAnimacao(ang) {
    var applet = document.ggbApplet;
    if (applet.getValue(ang) >= 6.28) {
        applet.stopAnimation();
        applet.setValue('alpha_1', 0);
        setTimeout('var applet=document.ggbApplet; applet.registerObjectUpdateListener("b", "atv1_limpar_rastro");', 500);
    }
}

function tudoCerto() {
    if (PosicaoAtual.Parte == 4) {
        setResp('atividade_1', 3);
        $('Mapinha').Salva('ondas', 'atividade_1', '3');
    }
}

function selecionou_q_1_a() {
    var applet = document.ggbApplet;
    applet.setVisible('w', false);
    applet.setVisible('J', false);
    applet.setVisible('texto4', false);
    applet.setVisible('texto9', true);
    applet.setFixed('f', false);
    applet.evalCommand('f(x)=sin(x)');
    applet.setFixed('f', true);
    applet.setVisible('N', true);
    applet.setVisible('texto6', true);
}

function selecionou_q_2_a() {
    var applet = document.ggbApplet;
    applet.setVisible('w', false);
    applet.setVisible('J', false);
    applet.setVisible('texto4', false);
    applet.setVisible('texto9', true);
    applet.setFixed('f', false);
    applet.evalCommand('f(x)=sin(x)');
    applet.setFixed('f', true);
    applet.setVisible('N', true);
    applet.setVisible('texto6', true);
}

function selecionou_q_3_a() {
    var applet = document.ggbApplet;
    applet.setFixed('f', false);
    applet.evalCommand('f(x)=cos(x)');
    applet.setFixed('f', true);
    applet.setVisible('N', false);
    applet.setVisible('texto6', false);
    applet.setVisible('w', true);
    applet.setVisible('J', true);
    applet.setVisible('texto9', true);
    applet.setVisible('texto4', true);
}

function verificarA() {
    var resposta = false;

    var valorA = processaExpressao($('atividade1_valor_a').value);
    if ((valorA == '') || isNaN(valorA) || (valorA == 1) || (valorA < -3) || (valorA > 3)) resposta = false;
    else {
        valorA = parseFloat(valorA);
        valorA = valorA.toFixed(1);
        $('atividade1_valor_a').value = valorA;
        setResp('atividade_1_valor_a', valorA);
        setResp('atividade_1_setado', 1);

        resposta = true;
    }

    return resposta;
}


function set1() {
    var resposta = false;

    if (verificarA()) {
        removeEsperando({ Parte: 1, Questao: 'parte2_q5', Item: 0 }, '');
        removeEsperando({ Parte: 1, Questao: 'parte2_q5', Item: 1 }, '');
        resposta = true;
    } else {
        var Perg = {
            conteudo: 'Preencha um valor entre -3 e 3 e diferente de 1.',
            layout: ['seta_baixo', 'direita'],
            largura: 10,
            callback: function() {},
            respostas: [{ sim: 'Ok' }]
        };
        var tmp = new PopupCallback(this.link, Perg.conteudo, Perg.layout, Perg.largura, Perg.callback, Perg.respostas, this);
        tmp.abre();
        resposta = false;
    }

    return resposta;

}

function unset1() {
    adicionaEsperando({ Parte: 1, Questao: 'parte2_q5', Item: 0 });
    adicionaEsperando({ Parte: 1, Questao: 'parte2_q5', Item: 1 });
    setResp('atividade_1_setado', 0);
    apagaResp('atividade_1_valor_a');
}