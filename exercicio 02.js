/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os 
lados são diferentes. Crie uma função que recebe os comprimentos dos três lados de um 
triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo
deve-se abstrair as condições matemáticas de existência de um triângulo).
*/

function triangulos (lado1, lado2, lado3){
    if (lado1 == lado2 && lado2 == lado3){
        return "Equilátero"
    } else if (lado1 == lado2 && lado2 != lado3){
        return "Isóceles"
    } else {
        return "Escaleno"
    }
}

console.log(triangulos(10, 10, 10))
console.log(triangulos(10, 10, 20))
console.log(triangulos(10, 20, 30))
