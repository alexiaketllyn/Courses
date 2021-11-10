# Estrutura

Definição comum de uma função: variáveis criadas dentro de uma função apenas podem ser utilizadas dentro dela.

Quando invocamos o "return", **a função para de ser executada**.

## Função anônima

Funções que representam expressões.

Uma variável pode armazenar uma função.

## Função autoinvocável

Uma função anônima entre parênteses, seguida por outro par de parênteses, que representa sua chamada.

Também pode ser utilizada com parâmetros ou armazenada em uma variável.

## Callbacks

Uma função passada de argumento para outra.

Utilizando callbacks, você tem maior controle da ordem de chamadas.

## Parâmetros

Objeto "arguments": um array com todos os parâmetros passados quando a função foi invocada.

## Arrays

**Spread:** uma forma de lidar separadamente com elementos.

O que era parte de uma array se torna um elemento independente.

**Rest:** combina argumentos em um array.

O que era um elemento independente se torna parte de um array.

## Objetos/Object Destructuring

Entre chaves {}, podemos filtrar apenas os dados que nos interessam em um objeto.

## If/else

Declaração 1(dentro de if) ocorre caso a condição seja verdadeira

Declaração 2(dentro de else) ocorre caso a condição seja falsa.

OBS: JavaScript não tem elseif, as palavras sempre estão espaçadas!

## Switch/case

- Equivale a uma comparação de tipo e valor (===)
- Sempre precisa de um valor "default"
- Ideal para quando se precisa comparar muitos valores

## For

Loop dentro de elementos iteráveis (arrays, strings).

**For...in:** loop entre propriedades enumeráveis de um objeto.

**For...of:** loop entre estruturas iteráveis(arrays, strings).

## While e Do...While

While:Executa instruções até que a condição se torne falsa.

Do...While:Executa instruções até que a condição se torne falsa. Porém a primeira execução sempre ocorre.

## This

A palavra reservada **this** é uma referência de contexto.

Seu valor pode mudar de acordo com o lugar no código onde foi chamada.

      contexto                      Referência 

- em um objeto (método)         Próprio objeto dono do método
- sozinha                       Objeto global (em navegadores, Window)
- função                        Objeto global
- evento                        Elemento que recebeu o evento

### Call

É possível passar parâmetros para essa função separando-os por vírgulas.

### Apply

É possível passar parâmetros para essa função dentro de um array.

### Bind

Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro.

## Arrow function

Sintaxe: caso exista apenas uma linha, pode dispensar as chaves e o return.

Caso exista apenas um parâmetro, pode dispensar os parênteses.

OBS: arrow function não faz hoisting!

**Outras restrições:**

- "this" sempre será objeto global. Métodos para modificar seu valor não irão funcionar;
- Não existe o objeto "arguments";
- O construtur(ex:new MeuObjeto()) também não pode ser utilizado.
