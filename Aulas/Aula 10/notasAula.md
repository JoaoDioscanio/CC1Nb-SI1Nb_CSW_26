CSS in line
Ex.: <h1 style="text-align":justify>Lorem ipsum, dolor sit amet consectetur</h1>
É usada um estilo para cada tag do HTML, sendo eficaz para pequenas mudanças porém horripilante para mudanças gerais (Mudar a cor de todas as tags). Esta técnica deve ser evitada ao máximo. Ela acabab deixando seu código meio confuso, misturando a parte HTML e CSS em uma mesma linha. Deve usar quando quer fazer um estilo pontual.

CSS internal
Agrupa a CSS no início da páginam agrupando o estilo. Nesta abordagem, definimos o estilo para a atag em toda a página;
Ex.: <head>style: h1{ font; color; background-color} h2 {font-size; color:black}</head>

CSS external style
Abordagem mais avançada que agrupa a CSS, onde o código CSS é escrito em um arquivo a parte (.css)
