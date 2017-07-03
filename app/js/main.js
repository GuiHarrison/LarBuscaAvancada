Webflow.require('ix').init([
	{"slug":"seta-2","name":"seta 2","value":{"style":{},"triggers":[{"type":"dropdown","selector":".seta-2","descend":true,"preserve3d":true,"stepsA":[{"transition":"transform 300ms ease 0","rotateX":"0deg","rotateY":"0deg","rotateZ":"180deg"}],"stepsB":[{"transition":"transform 300ms ease 0","rotateX":"0deg","rotateY":"0deg","rotateZ":"0deg"}]}]}},
	{"slug":"seta3","name":"seta3","value":{"style":{},"triggers":[{"type":"dropdown","selector":".seta-3","descend":true,"preserve3d":true,"stepsA":[{"transition":"transform 300ms ease 0","rotateX":"0deg","rotateY":"0deg","rotateZ":"180deg"}],"stepsB":[{"transition":"transform 300ms ease 0","rotateX":"0deg","rotateY":"0deg","rotateZ":"0deg"}]}]}},
	{"slug":"seta-4","name":"seta 4","value":{"style":{},"triggers":[{"type":"dropdown","selector":".seta-4","descend":true,"preserve3d":true,"stepsA":[{"transition":"transform 300ms ease 0","rotateX":"0deg","rotateY":"0deg","rotateZ":"180deg"}],"stepsB":[{"transition":"transform 300ms ease 0","rotateX":"0deg","rotateY":"0deg","rotateZ":"0deg"}]}]}},
	{"slug":"seta-1","name":"seta 1","value":{"style":{},"triggers":[{"type":"dropdown","selector":".seta-1","descend":true,"preserve3d":true,"stepsA":[{"transition":"transform 300ms ease 0","rotateX":"0deg","rotateY":"0deg","rotateZ":"180deg"}],"stepsB":[{"transition":"transform 300ms ease 0","rotateX":"0deg","rotateY":"0deg","rotateZ":"0deg"}]}]}},
	{"slug":"seta-5","name":"seta 5","value":{"style":{},"triggers":[{"type":"dropdown","selector":".seta-5","descend":true,"preserve3d":true,"stepsA":[{"transition":"transform 300ms ease 0","rotateX":"0deg","rotateY":"0deg","rotateZ":"180deg"}],"stepsB":[{"transition":"transform 300ms ease 0","rotateX":"0deg","rotateY":"0deg","rotateZ":"0deg"}]}]}},

	{"slug":"busca-avancada","name":"busca avancada","value":{"style":{},"triggers":[{"type":"click","selector":".pai-busca-avancada","stepsA":[{"height":"250px","transition":"transform 200 ease 0, height 350ms ease 0"}],"stepsB":[{"height":"0px","transition":"height 350ms ease 0"}]},{"type":"click","selector":".icon","preserve3d":true,"stepsA":[{"transition":"transform 350ms ease 0","rotateX":"0deg","rotateY":"0deg","rotateZ":"180deg"}],"stepsB":[{"transition":"transform 350ms ease 0","rotateX":"0deg","rotateY":"0deg","rotateZ":"0deg"}]},{"type":"click","selector":".h1-home","preserve3d":true,"stepsA":[{"transition":"transform 350ms ease 0","x":"0px","y":"-80px","z":"0px"}],"stepsB":[{"transition":"transform 350ms ease 0","x":"0px","y":"0px","z":"0px"}]},{"type":"click","selector":".h2-home","preserve3d":true,"stepsA":[{"transition":"transform 350ms ease 0","x":"0px","y":"-80px","z":"0px"}],"stepsB":[{"transition":"transform 350ms ease 0","x":"0px","y":"0px","z":"0px"}]},{"type":"click","selector":".div-buscador","preserve3d":true,"stepsA":[{"transition":"transform 350ms ease 0","x":"0px","y":"-80px","z":"0px"}],"stepsB":[{"transition":"transform 350ms ease 0","x":"0px","y":"0px","z":"0px"}]}]}}
]);

$(function() {
	'use strict';
	
	var $baFiltro = $('.div-coluna.filtro');
	
	$baFiltro.on('click', function() {
		var $thisList = $(this).find('.droplist'),
			$thisParent = $(this).parent('.div-busca-avancada1');
		
		$(this).siblings().removeClass('w--open');
		$(this).siblings().find('.droplist').removeClass('w--open');
		
		if ( !$(event.target).hasClass('droplist') && !$(event.target).is('input') && $(this).hasClass('w--open') ) {
			
			$(this).removeClass('w--open');
			$thisList.removeClass('w--open');
			
		} else {
			
			$(this).addClass('w--open');
			$thisList.addClass('w--open');
			
		}
	});
});