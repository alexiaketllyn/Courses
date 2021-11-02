# Entendendo o que é lógica

* Programar é resolver problemas.

**O que é lógica?** "coerência de raciocínio, de ideias",  "sequência coerente, regular e necessária de acontecimentos, coisas"

* Lógica de programação significa apenas contextualizar a lógica na programação de computadores, buscando a melhor sequência de ações para solucionar um problema.

*Metacognição* : "Pensar como você pensa".
*Abstração* : é a habilidade de concentrar nos aspectos essenciais de um contexto qualquer, ignorando características menos importantes ou acidentais.

## O que são algoritmos e pseudocódigo

* A resposta mais simples para o que é um algoritmo é: uma sequência de passos que resolve um problema.

Ex:

Início-dia
    Acordei
    Levantei da cama
    Troquei de roupa
    Escovei os dentes
    Fui a padaria
    tomei café
    Escovei os dentes
    Fui ao trabalho
    ...
Fim-dia

## Pseudocódigo

* É uma forma genérica e escrever um algoritmo, utilizando uma linguagem simples(nativa, ou seja, em português a quem o escreve, de forma a ser entendida por qualquer pessoa).

## Aprendendo fluxograma, variáveis e constantes

* Fluxograma é uma ferramenta utilizada para representar graficamente o algoritmo, isto é, a sequência lógica e coerente do fluxo de dados.

* É um tipo de diagrama e pode ser entendido como uma representação esquemática de um processo. Podemos entendê-lo, na prática, como a documentação dos passos necessários para a execução de um processo qualquer.

**O que são variáveis?**

  Na programação, uma variável é um objeto(uma posição, frequentemente localizada na memória) capaz de reter e representar um valor ou expressão.

**Declaração de variáveis:**

INÍCIO
DECLARA nota1: número
DECLARA nota2: número
DECLARA nota3: número
DECLARA nota4: número
DECLARA média: número
LEIA (nota1)
LEIA (nota2)
LEIA (nota3)
LEIA (nota4)
media=(nota1+nota2+nota3+nota4)/4
IMPRIMIR (media)
FIM

**Tipos de variáveis:**

As variáveis e as constantes podem ser classificadas basicamente de quatro tipos: Numéricas, Caracteres, Alfanuméricas ou Lógicas.

**O que é uma constante**?

As constantes são valores imutáveis e não são alterados durante a vida útil do programa.

*Declaração de constantes*
INICIO
DECLARA pi=3,14
DECLARA raio: número
FIM

## Tomadas de decisão e expressões

*Expressões aritméticas*:
São expressões que utilizam operadores aritméticos e funções aritméticas envolvendo constantes e variáveis.

Exemplo:

50+50
Total+50

*Operadores aritméticos:*

* Soma +
* Subtração -
* Multiplicação *
* Divisão /
* Potenciação ^
* Porcentagem %

*Expressões literais*:
São expressões com constantes e/ou variáveis que tem como resultado valores literais. Iremos utilizar as expressões literais na atribuição de valor para uma variável ou constante.

Exemplos:
nome="José da Silva"
nome<-"José da Silva"
media=(nota1+nota2+nota3+nota4)/4

Exempos de expressões aritméticas e literais:

variáveis    Comando de atribuição/operação   Procedimento

A B C         A=2                           Armazenar o valor
                                            2 na variável A
              B=A+3                         Somar o valor de A
                                            (2) com 3 e armazenar em B(5)
              C=A+B                         Somar o valor de A                           (2) e o valor de B                             (5) e armazenar em    C                                C  (7)

*Operadores relacionais*:
São expressões compostas por outras expressões ou variáveis numéricas com operadores relacionais. As expressões relacionais retornam valores lógicos(Verdadeiro/Falso).

## Tomadas de decisão

Qunado escrevemos programas, geralmente ocorre a necessidade de decidir o que fazer dependendo de alguma condição encontrada durante a execução.

## Como utilizar a concatenação

Concatenação é um termo usado em computação para designar a operação de unir o conteúdo de duas strings*.

*String é uma sequência de caracteres.

Outra definição de concatenação é: agrupamento de duas ou mais células que, incluindo fórmulas, textos ou outras informações contida no seu interior, dá origem a um único resultado.

## Estrutura de repetição

Dentro da lógica de programação é uma estrutura que permite executar mais de uma vez o mesmo comando ou conjunto de comandos, de acordo com uma condição ou com um contador.

## Linguagens de programação e o portugol

Linguagem de programação é uma linguagem escrita e formal que especifica um conjunto de instruções e regras usadas para gerar programas (software). Um software pode ser desenvolvido para rodar em um computador, dispositivo móvel ou em qualquer equipamento que permita sua execução.

"O que é óbvio para você, certamente não é óbvio para uma máquina. E se você quer que a máquina faça algo para você, você precisa, "falar com ela".

**A função das linguagens de programação é servir de um meio de comunicação entre computadores e humanos.**

**Alto nível:**
Essas são aquelas cuja sintaxe se aproxima mais da nossa linguagem e se distanciam mais da linguagem de máq1uina.

**Baixo nível:**
É aquela que se aproxima mais da linguagem de máquina. Essas são as que você precisa ter o conhecimento direto da arquitetura do computador para fazer alguma coisa.

**Compiladas:**
É uma linguagem de programação em que o código fonte, é executado diretamente pelo sistema operacional ou pelo processador, após ser traduzido por meio de um processo chamado compilação.

**Interpretadas:**
É uma linguagem de programação em que o código fonte é executado por um programa de computador chamado interpretador, que em seguida é executado pelo sistema operacional ou processador.

## O que é o Portugol?

É uma pseudolinguagem que permite ao leitor desenvolver algoritmos estruturados em português de forma simples e intuitiva, independentemente de linguagem de programação.

É uma pseudolinguagem que permite ao programador pensar no problema em si e não no equipamento que irá executar o algoritmo.

## Desvios condicionais e comentários- Portugol

**Utilização:**
É utilizada a palavra reservada **se**, a condição a ser testada entre parenteses e as instruções que devem ser executadas entre chaves caso o desvio seja **verdadeiro**.

Exemplo:

se (media>=7) {
    escreva("Parabéns!! Você foi aprovado!!")
}

**Caso**
Este comando é similar aos comandos **se** e **senão**, e reduz a complexidade na escolha de diversas opções. Apesar de suas similaridades com o **se**, ele possui algumas diferenças. Neste comando não é possível o uso de operadores lógicos, ele apenas trabalha com valores definidos.

Exemplo:

inteiro valor=0
escolha (valor)
{
caso 1:     //testa se o valor é igual a 1
escreva("OK!Abrir Netflix!")
pare
caso 2:     //testa se o valor é igual a 2
escreva("OK!Abrir Amazon Prime!")
pare
caso 3:     //testa se o valor é igual a 3
escreva("OK!Abrir HBO GO!")
pare
caso contrário:
escreva("Você deve escolher as opções 1, 2 ou 3")
}

## Laços de repetição- Portugol

Dentro da lógica de programação é uma estrutura que permite executar mais de uma vez o mesmo comando ou conjunto de comandos, de acordo com uma condição ou com um **contador**.

Exemplo:

função inicio()
{
    inteiro contador, limite, resultado
    contador = 0
    limite= 10
    faca
    {
        resultado = 9* contador
        escreva ("9 x" + contador +"="+resultado + "\n")
        contador ++
    }enquanto (contador<=limite)
}

## Matrizes e vetores

Uma matriz é uma coleção de variáveis de mesmo tipo, acessíveis com um único nome e armazenados contiguamente na memória.

A individualização de cada variável de um vetor é feita através do uso de **índices**.

Os **vetores** são matrizes de uma só dimensão.

Exemplo :

cadeia Vetor[5]; // declara um vetor de 5 posições 
cadeia Matriz[5][3]; // declara uma matriz de 5 linhas e 3 colunas

cadeia frutas[4]
frutas[0]="Maçã"
frutas[1]="Pêra"
frutas[2]="Uva"
frutas[3]="Melão"
escreva(frutas[2])

cadeia cesta[][]= {{"Maçã", "100"},{"Pêra", "200"}, {"Melão", "300"}}

escreva("Fruta:" + cesta[0][0] + "Quantidade;" + cesta[0][1])
