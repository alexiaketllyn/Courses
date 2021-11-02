// functions expression
// function anonymous

// Parâmetros (parameters)
const sum = function (number1, number2) {
    total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25
sum(number1, number2) // arguments - argumentos

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)

// Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo)

// function escope
let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject)

// function hoisting

const sayMyName = function () {
    console.log('Mayk')
}
sayMyName();
// quando vc faz uma função de uma maneira de expressão, ela não vai sofrer elevação

// arrow function = geralmente atribuída a uma constante

const sayMyName1 = () => {

    console.log('Mayk')
}

sayMyName()

// callback function = uma função que está passando como parâmetro para outra função = chamo uma função normal e depois chamo outra de volta = callback é chamar de volta

function sayMyName2(name) {
    console.log('antes de executar a função callback')
    name()

    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)

/* 
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + " está andando"
    }
}
const Mayk = new Person("Mayk")
const Joao = new Person("Joao")
console.log(Mayk.walk())
console.log(Joao.walk())

/*
    Prototype

    * prototype-based language
    * prototype chain
    * __proto__

*/

/* Expressões e Operadores

- Expressions
- Operators
    Binary
    Unary
    Ternary
*/

let number = 1
var ligacao = 61996330801
console.log(number + 1)

console.log(ligacao == 61996330801 ? 'alo' : 'nada')

/* 
    New

    * left-hand-side expression 
    * criar um novo objeto
*/

let name = new String('Mayk')
name.SurName = "Brito"
let age = new Number(23)
console.log(name, age)

let date = new Date('2020-12-01')
console.log(date)




