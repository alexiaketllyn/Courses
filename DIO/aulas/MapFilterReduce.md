# Map

- Cria um novo array
- Não modifica o array original
- Realiza as operações em ordem

## Sintaxe

array.map e recebe ou o callback ou o thisArg

Callback: função a ser executada em cada elemento.
thisArg (opcional): valor de 'this' dentro da função de callback.

## Map vs forEach

- Valor de retorno
- Considere se o array auxiliar será necessário

## Filter

- Cria um novo array
- Não modifica o array original

array.filter e recebe callback ou thisArg(opcional).

## Reduce

- Executa uma função em todos os elementos do array, retornando um valor único.

array.reduce recebe uma callbackFn e um initialValue.

Callback: função a ser executada a partir do acumulador.
initialValue: valor sobre o qual o retorno final irá atuar.

Accumulator/prevValue: acumulador de todas as chamadas de callbackFn.
currentValue: elemento atual sendo acessado pela função.