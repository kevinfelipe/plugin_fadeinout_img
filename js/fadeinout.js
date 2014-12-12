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
			'initImg' : '1'
		}

		var settings = $.extend({},defaults,options);
		var totalDelayTime = 0;

		return this.each(function(){
			var imgClass = new Array();
			var initTimeFadeInOut = settings.timefadeinout;

			settings.timefadeinout = parseInt(settings.time*(settings.timefadeinout/100));
				
			totalFadeInOut = parseInt(initTimeFadeInOut)+parseInt(initTimeFadeInOut);
			delayTime = parseInt(settings.time*(totalFadeInOut/100));

   			totalDelayTime = parseInt(settings.time) - parseInt(delayTime);

			$("#fadeinout img").each(function(){
				var img = $(this).attr('class');
				$("."+img).hide();
				imgClass.push(img);
			});
			imgloop(imgClass);
		});

		function imgloop(img){
			var qtdImg = img.length;
			qtdImg--;
			settings.initImg--;

			var i = settings.initImg;
			imghideinout(img[i]);
			i++;
			setInterval(function(){
				imghideinout(img[i]);
				qtdImg==i ? i=0 : i++;
			}, settings.time);
		}

		function imghideinout(img){
			$("."+img).fadeIn(settings.timefadeinout).delay(totalDelayTime).fadeOut(settings.timefadeinout);
		}

	};
})(jQuery);
