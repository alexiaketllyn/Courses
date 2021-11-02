console.log('Bem vindos ao Starter')

    // Aqui eu tenho um comentário em linha
    * /
        Aqui eu tenho um comentário multi linha

         O código abaixo escreve alguma mensagem no devtools

    * /
console.log('Bem vindos ao Starter') // alguma coisa

// object

const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(person.name)

// Array 

const animals = [
    'Lion'
    'Monkey'
    'Cat'
]

// acessar valores log(...data: any[]: void)
console.log(animals)

// 1. Declare uma variável de nome weight
let weight

// 2. Que tipo de dado é a variáel acima?
console.log('tipeof weight') Undefined
/* 
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscriped: boolean
          
*/

let name = "Mayk"
let age = 23
let stars = 4.8
let isSubscribed = true

/*

/* 
    4. A variável student abaixo é de que tipo de dado?
    object
   
    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name <age> e <weight> pelos valores de cada propriedade do objeto 
*/

let student = {
    name: "Mayk",
    age: 23,
    weight: 74.8,
    isSubscribed: true,
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/*
    5. Declare uma variável do tipo Array, de nome student e atribua a ela nenhum valor, ou seja, somente o Array vazio 

 */

let student = []
/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/
students = [
    student
]
/*
    7. Coloque no console o valor da posição zero do Array acima
*/
console.log(students[0])
/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

const john = {
    name: "John"
    age: 23,
    weight: 74.8,
    isSubscribed: true,
}

students = [
    student,
    john
]
console.log(students)
/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta rode o código e veja se você acertou.

    console.log(a)
    var a = 1
*/
var a

console.log(a)
var a = 1

// a resposta vai dar undefined, porque a variável a ainda não está criada, mas vai sofrer o hoisting

/*
    Prototype

    * prototype-based language
    * prototype chain
    * __proto__

*/

/* 
    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo

*/

console.log('9' + 5)
console.log(number('9') + 5)

// Manipulação de Strings e números

// Transformar String em Número e Número em String
let string = "123"
    (number(string))
let number = 321
    (string(number))

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
let word = "Paralelepípedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let number = 345.33452345
console.log(number.toFixed(2).replace(".", ","))

// Transforme letras minúsculas em maiúsculas. Faça o contrário disso também
let word = "Programar é muito bacana!"
console.log(word.toUpperCase())
console.log(word.toLowerCase())

// Manipulando Strings e Arrays

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver um amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

// Manipulando Strings

// Verificar se o texto contem a palavra Amor

let phrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor"))

// Manipulando Arrays

// Criar Array com construtor
let myArray = new Array('a', 'b', 'c')

// Contar elementos de um Array 
console.log([
    "a",
    { type: "array" }
     function () { return "alo" },
][1].type)

// Transformar uma cadeia de caracteres em elementos de um array

let word = "manipulação"
console.log(Array.from(word))

// Manipulando Arrays

let techs = ["html", "css", "js"]

// Adicionar um item no fim
console.log(techs.push("nodejs")
// adicionar no começo
techs.unshift("sql")
// remover do fim
techs.pos()
// remover do começo
techs.shift()
// pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
// remover 1 ou mais items em qualquer posição do array
techs.splice(1, 1)
// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
