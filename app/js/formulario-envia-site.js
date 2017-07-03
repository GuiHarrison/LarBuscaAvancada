$(document).ready(function(){

/*PEGAR PARAMETRO URL*/	
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
/*FIM// PEGAR PARAMETRO URL*/	


/*Dados rastreaveis url*/ 
$('#identificador').val(getUrlParameter('l'));
if (getUrlParameter('s') == 'empresas'){
$('#CodOportunidadeMercado').val('4');
}else{
$('#CodOportunidadeMercado').val('1');
}
$('#produto').val(getUrlParameter('s'));
$('#campanha').val(getUrlParameter('c'));
$('#produto').val(getUrlParameter('s'));
$('#origem').val(getUrlParameter('o'));
/*Dados rastreaveis url*/ 

/*FUNÇÕES ESTADO E CIDADE*/	
$.getJSON('estados_cidades.json', function (data) {
		$('<option>Selecionar cidade</option>').appendTo("#cidades");
		var items = [];
		var options = '<option value="">Escolha um estado</option>';	
		$.each(data, function (key, val) {
			options += '<option value="' + val.nome + '">' + val.nome + '</option>';
		});					
		$("#estados").html(options);				
		
		$("#estados").change(function () {				
			var options_cidades = '';
			var str = "";					
			
			$("#estados option:selected").each(function () {
				str += $(this).text();
			});
			
		$.each(data, function (key, val) {
			
			if(val.nome == str) {							
				$.each(val.cidades, function (key_city, val_city) {
					options_cidades += '<option value="' + val_city + '">' + val_city + '</option>';
				});							
			}
		});

		$("#cidades").html(options_cidades);
		
	}).change();		
	$('<option>Cidade</option>').appendTo("#cidades");
});
/*FIM // FUNÇÕES ESTADO E CIDADE*/	





/*MASCARA TELEFONE*/
	
var maskBehavior = function (val) {
	return val.replace(/\D/g, '').length === 9 ? '00000-0000' : '0000-00009';
	},
		options = {onKeyPress: function(val, e, field, options) {
		field.mask(maskBehavior.apply({}, arguments), options);
		}
	};

$('#telefone').mask(maskBehavior, options);	

$('#ddd').mask('99');

/*FIM MASCARA TELEFONE*/


/*VALIDA E ENVIA FORMULÁRIO*/

$(function () { 
 $('#enviar').click(function(e) {
  e.preventDefault();
    $("#formulario").submit();
  }); 
  $("#formulario").validate();
			
});	
	
$('#formulario').validate({
			rules: {
				nome: {
					required: true,
					minlength: 2,
				},
				email: {
					required: true,
					email: true,
				},
				ddd: {
					required: true,
					minlength: 2,
				},
				telefone: {
					required: true,
					minlength: 9,
				},
	            estados: {
					required:true,
				},
				cidades: {
					required:true,			
				},
				/*cliente: {
					required:true,		
				}*/
			},
			messages: {
				nome: {required: "Digite o seu nome.",
				},
				email: {
					required: "Digite um e-mail.",
					email:"Digite um e-mail válido",
				},
				ddd: {
					required: "Digite o código da cidade.",
					minlength: "Digite o código da cidade.",
				},
				telefone: {
					required: "Digite um número de telefone.",
					minlength: "Digite um telefone válido",	
				},
				estados: {
					required: "Selecione um estado.",	
				},
				cidades: {
					required: "Selecione uma cidade.",		
				},
				/*cliente: {
					required: "<br>Selecione uma opção.",
				}*/	
				
			},
		submitHandler: function(form ){ 
				$('#enviar').hide();
				$('#enviando').show();	
				var solucao = $("#produto").val();
				var campanha = $("#campanha").val();
				var tipocampanha = $("#tipocampanha").val();
				var local = $("#identificador").val();
				var origem = $( "#origem" ).val();
				var tipo = $('#ChatOffline').val();
				var posicao = $('#posicao').val();
				var redireciona = $('#redireciona').val();
				var dados = $('#formulario').serialize();
				
				$.ajax({
					type: "POST",
					url: "http://contato.mastermaq.com.br/formularios/include/envia-formulario.asp",
					data: dados,
					success: function (data) {
                    //	$("div#ret").html(data);							
                    if (data == "OK") {
							$("#formulario")[0].reset();
							if ( $("#campanha").val().length == 0 ) {
									$.ajax({
										  type: "GET",
										  url: "https://www.rdstation.com.br/api/1.2/conversions",
										  data: dados,
										  success: function() {
											 //location.href = "http://www.mastermaq.com.br/"+redireciona+"?s=" + solucao +"&l="+local;
											window.location.href = "http://www.mastermaq.com.br/enviado.html?s=" + solucao + "&l="+local;
											return false;	
										  },
										  error: function() {
											window.location.href = "http://www.mastermaq.com.br/enviado.html?s=" + solucao + "&l="+local;
											return false;	
									     }	
									});	  
								return false;		
							} else{
									$.ajax({
										  type: "GET",
										  url: "https://www.rdstation.com.br/api/1.2/conversions",
										  success: function() {
												 console.log( "ok" );
												 //location.href = "http://www.mastermaq.com.br/"+redireciona+"?s=" + solucao + "&c=" + campanha + "&l="+local;	
												window.location.href = "http://www.mastermaq.com.br/enviado.html?s=" + solucao + "&c=" + campanha + "&l="+local;
												return false;	
										  },error: function() {
											window.location.href = "http://www.mastermaq.com.br/enviado.html?s=" + solucao + "&c=" + campanha + "&l="+local;
											return false;	
										}
									});	
								return false;	
							}
                    } 

                    else {
						$('#enviar').show();
						$('.enviando').hide();
                        alert('Ocorreu um erro momentâneo. Tente enviar novamente.');
                        return false;
                    }
				
                },
				

                error: function (xhr, status) {
                    //alert(' Nosso Servidor não esta disponível no momento, Tente mais tarde.');
						$('#enviar').show();
					$('.enviando').hide();
					alert('Ocorreu um erro momentâneo. Tente enviar novamente.');
                    alert(xhr.responseText);	
                    return false;
					
                }
				
			});
				
			}
		});
/*FIM VALIDA E ENVIA FORMULÁRIO*/

});

