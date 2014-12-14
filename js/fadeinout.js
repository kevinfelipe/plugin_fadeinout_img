/*
* jQuery Fadein FadeOut v0.1
* http://kevinfelipe.com.br
* 
* Copyright 2014, Genya 
* Free to use and abuse under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

(function($){
	$.fn.FadeInOut = function(options){
		var defaults = {
			'time' : '3000',
			'timefadeinout' : '10',
			'initImg' : '1',
			'images' : ''
		}

		var settings = $.extend({},defaults,options);
		var totalDelayTime = 0;
		var qtdImg = settings.images.length;	
		var selector = $(this);
		
		selector.find('img').hide();

		function init(){
			var imgClass = new Array();
			var initTimeFadeInOut = settings.timefadeinout;

			settings.timefadeinout = parseInt(settings.time*(settings.timefadeinout/100));
				
			totalFadeInOut = parseInt(initTimeFadeInOut)+parseInt(initTimeFadeInOut);
			delayTime = parseInt(settings.time*(totalFadeInOut/100));

   			totalDelayTime = parseInt(settings.time) - parseInt(delayTime);

			imgloop(settings.images);
		}

		function imgloop(img){
			qtdImg--;
			settings.initImg--;
			var i = settings.initImg;
			imghideinout(img[i]);

			i == qtdImg ? i=0 : i++;
			setInterval(function(){
				imghideinout(img[i]);
				qtdImg==i ? i=0 : i++;
			}, settings.time);
		}

		function imghideinout(img){
			selector.find("img."+img).fadeIn(settings.timefadeinout).delay(totalDelayTime).fadeOut(settings.timefadeinout);
		}

		function validateinit(){
			if(settings.timefadeinout > 50){
				alert("O Plugin contém um erro no timefadeinout, tem que ser menor do que 50");
				return false;
			} else if(settings.initImg > qtdImg){
				alert("essa imagem não existe, tem que ser menor que: " + settings.initImg);
				return false;
			} else {
				init();
			}
		}

		return validateinit();

	};
})(jQuery);