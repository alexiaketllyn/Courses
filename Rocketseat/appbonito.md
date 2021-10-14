# Trabalhando com fontes 

Tipografia transmite mensagem

    - negrito
    - tamanho
    - estilo

## Basic font properties 

* font-family
* font-weight
* font-style
* font-size

## Font family

* Tipo de fonte de um elemento
* Lista de fontes e ordem de prioridade
* Inclui *fallback* font

```css
p {
    font-family: "Times New Roman", Times, serif; 
}
```

    -serif
    - sans

## Font weight

* Peso da fonte 

```css
p {
    font-weight: bold;
}
```

## Font style 

* O estilo da fonte

```css
span {
    font-style: italic;
}
```

## Font size 

* O tamanho da fonte 

```css
p {
    font-size: 18px;
}
```

## Web fonts 

- fontes do sistema x fontes da web
- como usar fontes para web?

    * @font-face
    * @import
    * @link


# Atribuindo mais estilos às fontes 

https://developer.mozilla.org/en-US/docs/learn/CSS/styling_text/Fundamentals

## Font-variant

* Variações na apresentação da fonte

```css
p {
    font-variant: small-caps;
}
```

https://developer.mozilla.org/en-US/docs/web/CSS/font-variant

## font-stretch

* alargamento ou encolhimento da fonte
* aceita palavra-chaves como: expanded, condensed, normal
* aceita porcentagens de 50% a 200% 

```css
p {
    font-stretch: expanded;
}
```
https://developer.mozilla.org/en-US/docs/web/CSS/font-stretch


## letter-spacing

* Espaços entre caracteres

```css
p {
    letter-spacing: 4px;
}
```
https://developer.mozilla.org/en-US/docs/web/CSS/letter-spacing

## word-spacing

* Espaço entre caracteres

```css
p {
    word-spacing: 4px;
}
```
https://developer.mozilla.org/en-US/docs/web/CSS/word-spacing

## line-height

* Espaço entre linhas
* pode ser com unidade ou sem unidades de medida
* comuns: 1.5 ou 2

```css
p {
    line-height: 1.6;
}
```
https://developer.mozilla.org/en-US/docs/web/CSS/line-height

## text-transform

* Transformação do texto

```css
p {
    text-transform: uppercase; /* capitalize | lowercase | none */
}
```
https://developer.mozilla.org/en-US/docs/web/CSS/text-transform


