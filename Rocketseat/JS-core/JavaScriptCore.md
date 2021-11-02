# JavaScrip Core

* Linguagem de programação que roda no Navegador do usuário (front-end)
    * Se você clicar em algum botão da página e aparece uma janela. Isso é o
    JavaScrip
    * Alteração do site ou aplicativo, conforme a interaçãodo usuário

* Roda também no computador (back-end)

## O que podemos fazer?

* POdemos criar apliações web, mobile (React Native), desktop (Electron)
* Empresas famosas que usam
    * Facebook (Instagram, Whatsapp)
    * Google (Youtube, Gmail, Drive)
    * Uber
    * Netflix
    * TikTok
    * ...

* 99,99% dos sites na web usam JavaScript
* Linguagem obrigatória para quem programa o Front-end web
  
## Evolução

  * SA comunidade cresce cada vez mais e a linguagem está sempre evoluindo
  
## O que vamos ver no curso?

- Tipos de dados
- Variáveis
- Funções
- Condicionais
- Estruturas de repetição
- ...

## Como vai funcionar a dinâmica do curso?

- Treino de futebol
- Treino de arter marciais

* Conceitos e fundamentos
* Prática
* Revisão

# A importância da sintaxe

* Toda linguagem tem
* uma boa comunicação necessita de uma boa sintaxe
* 82% dos erros para iniciantes programação

```js
    console.log("Bem vindos ao Starter")
```
# Tipos de dados

* Gramática
    *  Elementos da linguagem e suas combinações
    *  A arte de falar e escrever corretamente
* Vocabulário 
    * COnjunto de termos e expressões
    * Ageupamento de palavras

* Precisamos saber como escrever
* precisamos saber os significados
* precisamos continuar aprendendo, para crescer nosso vocabulário

## Como vai ser a dinâmica do aprendizado?

* Conceito e escrita 

> Vamos aprender os tipos de dados mais utilizados na linguagem
    * Você sabia que é possível aprender 80% de uma linguagem nova, com cerca de 20% do vocabulário? (até menos)
  
  # Tipos de dados

  Conforme o ECMAScript standard temos 9 tipos de dados:

  * Data types
    * Primitive / Primitive value
    * Structtural
    * Structiral primitive

## Primitivos: Não é um objeto e o valor é imutável

* String   "ABC"  "BCA"  "bca" "Bca"
* Number   23  32  24 33
* Boolean  
* Undefined
* Symbol
* BigInt

## Estruturais

* Object 
  * Array
  * Map
  * Set
  * Date
  * ...
* Function

## Primitivo estreutural / Structural Root Primitive

* Null
  
# Variáveis 

* Nomes simbólicos para receber algum valor
* Atalhos de código
* Identificadores
* 3 palavras reservadas para criar uma variável
  * var
  * let
  * const

O JS é uma linguagem fracamente tipada e dinâmica
- Variáveis não precisam ter um tipo previamente 
  definido
- Podemos mudar o conteúdo da variável 

# Scope

* Escopo determina a visibilidade de alguma variável no JS

# Block Statement
```JS
// Vamos iniciar um bloco
{
    // aqui dentro é um bloco e posso colocar quealquer código
} // aqui fechamos o bloco
``` 

O bloco, também vai criar um novo escopo. Chamamos de 'block-scoped'

## Var 
```Js
// var é global e poderá funcionar fora de um escopo de bloco
console.log('> existe x antes do bloco? ', x)

{
   var x = 0 
}

console.log('> existe x depois do bloco? ', x)
```
## let e const
```Js
// const e let são locais e só funcionam no escopo onde foi criada
console.log('> existe y antes do bloco? ', y)

{
    let y = 0
}

console.log('> existe y depois do bloco? ', y)
```
## Para criar nomes 

* JS é case-sensitive (sensível ao caso)
* JS aceita a cadeia de caracteres unicode

- Posso:
    * Iniciar com esses caracteres especias: $ _
    * Iniciar com letras
    * Colocar acentos
    * Letras maíusculas e minúsculas fazem diferença

- Não posso:
    * Iniciar com números
    * Colocar espaços vazios no nome

- Ideal: 
    * Criar nomes que fazem sentido
    * Que explique o que a variável é ou faz
    * CamelCase
    * Snake_case
    * Escrever em inglês