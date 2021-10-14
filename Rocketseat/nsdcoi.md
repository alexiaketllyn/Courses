## Child combinator

* Identificado pelo sinal ` > ` entre dois seletores
* Seleciona somente o elemento que é filho direto do pai
* Elementos depois do filho direto serão desconsiderados

```css
body > ul > li
```

## Adjacente sibling combinator 

* Identificado pelo sinal ` + ` entre dois seletores
* Coleciona somente o elemento do lado direito que é irmão direto na hierarquia

```css
h1 + p
``` 

## General sibling combinator

* Identificado pelo sinal ` ~ ` entre dois seletores
* Seleciona todos os elementos irmãos

```css
h1 ~ p
```

## Utilizando combinadores

```css
ul > li[class="red"]
```

## Dica 

* Seletores muito específicos tendem a causar dificuldades no reuso das regras de estilização dos elementos
* Muitas vezes, um simples uso de classes, torna o trabalho mais eficiente.

# Pseudo-classes

É um tipo de seletor que irá selecionar um elemento que estiver em um estado específico.

Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse em cima dele.

Pseudo-classes começam com 2 pontos seguido do nome da pseudo-class `:pseudo-class-name`

## Selecionando elementos com pseudo-classes

* :first-child
* :nth-of-type()
* :nth-child()

## Ações do usuário

* :hover
* :focus

## Atributos 

* :disabled
* :required

## Referência 

https://developer.mozilla.org/en-US/docs/web/CSS/Pseudo-classes 

# Pseudo-elements

Com pseudo-elements nós podemos adicionar elementos HTML pelo próprio CSS 

`::pseudo-element-name`

## Exemplos 

* ::before
* ::after
* :first-line

## Referência 

https://developer.mozilla.org/en-US/docs/web/CSS/Pseudo-elements