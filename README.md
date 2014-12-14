plugin_fadeinout_img
====================

Plugin foi elaborado para ter mais de uma imagem fazendo o efeito fadeIn FadeOut 
demo: http://kevinfelipe.com.br/exemplos/fadeinout

====================
###Chamadas

```html
	<script type="text/javascript" src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="js/fadeinout.js"></script>
```
###Codigo jQuery

```js
jQuery(".fadeinout").FadeInOut({
	//Tempo para executação em milésimos de segundo nesse ex: são 3 segundos
	time: '3000',
	//isso é a porcentagem divida em aparecer e sumir ex: 10 é 10% para aparecer e 10% para sumir então terá 20% 
	timefadeinout: '10',
	//Por qual imagem irá iniciar
	initImg: '1',
	//Imagem que irão participar
	images: ['img_head_1','img_head_2','img_head_3']
});

```


### time
Tempo para executação em milésimos de segundo

### timefadeinout
isso é a porcentagem divida em fadeIn e FadeOut ex: 10 é 10% para fadeIn e 10% para fadeOut então terá 20%, o maximo é de 50%

###initImg
Por qual imagem irá iniciar

###initImg
Imagem que irão participar

###images
Imagem que irão participar

Contribuição
---
Meu grande brother https://github.com/juliograffin que passou a ideía em um projeto que iremos utilizar, e passou o html e as imagens

License
---
Licensed under the MIT License