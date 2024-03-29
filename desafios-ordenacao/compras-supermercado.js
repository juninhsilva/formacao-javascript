/*

Desafio

Pedro trabalha sempre até tarde todos os dias, com isso tem pouco tempo tempo para as tarefas domésticas. Para economizar tempo ele faz a lista de compras do supermercado em um aplicativo e costuma anotar cada item na mesma hora que percebe a falta dele em casa.

O problema é que o aplicativo não exclui itens duplicados, como Pedro anota o mesmo item mais de uma vez e a lista acaba ficando extensa. Sua tarefa é melhorar o aplicativo de notas desenvolvendo um código que exclua os itens duplicados da lista de compras e que os ordene alfabeticamente.
Entrada

A primeira linha de entrada contém um inteiro N (N < 100) com a quantidade de casos de teste que vem a seguir, ou melhor, a quantidade de listas de compras para organizar. Cada lista de compra consiste de uma única linha que contém de 1 a 1000 itens ou palavras compostas apenas de letras minúsculas (de 1 a 20 letras), sem acentos e separadas por um espaço.
Saída

A saída contém N linhas, cada uma representando uma lista de compra, sem os itens repetidos e em ordem alfabética.
 
Exemplo de Entrada 	Exemplo de Saída

2
carne laranja suco picles laranja picles
laranja pera laranja pera pera
	

carne laranja picles suco
laranja pera
*/

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets()" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print()": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// - "split()": divide uma String em um Array de Strings;

// Abaixo segue um exemplo de código que você pode ou não utilizar:

let num = parseInt(gets());
let index = 0;

let listas = Array(num);
let listaSet = Array(num);

//TODO: Complete os espaços em branco com uma possível solução para o problema:

while (index <num) {
    listas[index] = gets().split(" ");
    index++;
}

listas.map((i,d) => listaSet[d] = new Set(i));
listaSet.map((i,d) => listas[d] = [...i]);

listas.forEach(item=>item.sort());
listas.forEach(item=> print(item.join(" ")));