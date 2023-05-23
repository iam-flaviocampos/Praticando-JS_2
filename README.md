# Praticando-JS_2
Tipos de Triangulos (Equilátero, Isósceles ou Escaleno)

Dentro do código está descrito como anotação, o exercicio que foi pedido. Logo em baixo,
os códigos que usei para resolve-lo! Fique a vontade para entrar em contato comigo para
dar sugestões e dicas!
Este e todos os outros exercícios foram tirados do curso "Web Moderno Completo com
JavaScript 2022 + Projetos" na Udemy.


Então, eu criei uma função chamada "triangulos" que recebe três valores como entrada: "lado1", "lado2" e "lado3". Esses valores representam os comprimentos dos lados de um triângulo.

Dentro da função, eu faço algumas verificações para determinar qual tipo de triângulo é formado pelos lados dados.

Primeiro, eu verifico se todos os lados são iguais. Se sim, isso significa que temos um triângulo equilátero, onde todos os lados têm o mesmo comprimento. Nesse caso, eu retorno a string "Equilátero".

Caso os três lados não sejam iguais, eu verifico se apenas dois lados são iguais entre si. Se essa condição for verdadeira, temos um triângulo isósceles, onde dois lados têm o mesmo comprimento e o terceiro lado é diferente. Nesse caso, eu retorno a string "Isóceles".

Por fim, se nenhuma das condições anteriores for satisfeita, isso significa que os três lados são diferentes entre si. Temos então um triângulo escaleno, onde todos os lados têm comprimentos diferentes. Nesse caso, eu retorno a string "Escaleno".

Depois de definir a função, eu a chamo três vezes, passando diferentes valores de comprimentos de lados como argumentos. Em seguida, eu imprimo o resultado de cada chamada no console.

No primeiro caso, eu passo os valores 10, 10 e 10, que correspondem a um triângulo equilátero. Então, o console vai exibir a string "Equilátero".

No segundo caso, eu passo os valores 10, 10 e 20, que correspondem a um triângulo isósceles. Então, o console vai exibir a string "Isóceles".

No terceiro caso, eu passo os valores 10, 20 e 30, que correspondem a um triângulo escaleno. Então, o console vai exibir a string "Escaleno".

Assim, o código verifica e determina o tipo de triângulo com base nos comprimentos dos lados fornecidos e imprime o resultado no console.
