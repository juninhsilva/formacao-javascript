/*

Desafio

Crie um programa onde você receberá valores inteiros não negativos como entrada.

Ordene estes valores de acordo com o seguinte critério:

    Primeiro os Pares
    Depois os Ímpares

Você deve exibir os pares em ordem crescente e na sequência os ímpares em ordem decrescente.
Entrada

A primeira linha de entrada contém um único inteiro positivo N (1 < N < 10000) Este é o número de linhas de entrada que vem logo a seguir. As próximas N linhas terão, cada uma delas, um valor inteiro não negativo.
Saída

Exiba todos os valores lidos na entrada segundo a ordem apresentada acima. Cada número deve ser impresso em uma linha, conforme exemplo de saída abaixo.
 
Exemplo de Entrada 	Exemplo de Saída

10
4
32
34
543
3456
654
567
87
6789
98
	

4
32
34
98
654
3456
6789
567
543
87
*/

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets()" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print()": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// - "split()": divide uma String em um Array de Strings;

// Abaixo segue um exemplo de código que você pode ou não utilizar:

let totalItems = parseInt(gets());
let pares = [];
let impares = [];

//TODO: Complete os espaços em branco com uma possível solução para o problema:

for (let i = 0; i <totalItems; i++) {
  let number = parseInt(gets());
  if (number%2==0){
    pares.push(number);
  }
  else {
    impares.push(number);
  }
}

// O sort() irá ordenar os elementos do array;
pares.sort((a, b) => a - b);
impares.sort((a, b) => b - a);

for(let i = 0; i < pares.length;i++){
  print(pares[i])
}
for(let i = 0; i < impares.length;i++){
  print(impares[i])
}