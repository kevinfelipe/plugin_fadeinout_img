plugin_fadeinout_img
====================

Plugin foi elaborado para ter mais de uma imagem igual fazendo o efeito 


```
jQuery(".fadeinout").FadeInOut({
	//Tempo para executação em milesimos nesse ex: são 3 segundos
	time: '3000',
	//isso é a porcentagem divida em aparecer e sumir ex: 10 é 10% para aparecer e 10% para sumir então terá 20% 
	timefadeinout: '10',
	//Por qual imagem irá iniciar
	initImg: '1',
	//Imagem que irão participar
	images: ['img_head_1','img_head_2','img_head_3']
});

```