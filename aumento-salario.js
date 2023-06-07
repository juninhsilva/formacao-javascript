/*

Desafio

A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:
 
Salário 	Percentual de Reajuste

0 - 400.00
400.01 - 800.00
800.01 - 1200.00
1200.01 - 2000.00
Acima de 2000.00
	

15%
12%
10%
7%
4%

Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.
Entrada

A entrada contém apenas um valor de ponto flutuante, que pode ser maior ou igual a zero, com duas casas decimais.
Saída

Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste e o percentual de reajuste ganho, conforme exemplo abaixo.
 
Exemplo de Entrada 	Exemplo de Saída

400.00
	

Novo salario: 460.00
Reajuste ganho: 60.00
Em percentual: 15 %

800.01
	Novo salario: 880.01
Reajuste ganho: 80.00
Em percentual: 10 %

2000.00
	

Novo salario: 2140.00
Reajuste ganho: 140.00
Em percentual: 7 %
*/

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets()" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print()": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// - "split()": divide uma String em um Array de Strings;

// Abaixo segue um exemplo de código que você pode ou não utilizar:

const lines = gets();
const salary = Number(lines);
let percent;

//TODO: Complete os espaços em branco com uma possível solução para o problema:

if (                   ) {
  percent = 15;
} else if (               ) {
  percent = 12;
} else if (                  ) {
  percent = 10;
} else if (         ) {
  percent = 7;
} else {
  percent = 4;
}

const reajust = (              ) / 100;
const newSalary =            ;

print("Novo salario: " + newSalary.toFixed(2));
print("Reajuste ganho: " + reajust.toFixed(2));
print("Em percentual: " + percent + " %");