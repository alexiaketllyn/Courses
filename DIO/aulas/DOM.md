# DOM / Document Object Model

O DOM HTML é um padrão de como acessar e modificar os elementos HTML de uma página.

## DOM vs BOM

BOM: Browser Object Model

Tudo que está dentro do objeto Window.

## Métodos / manipulando o DOM

Estrutura HTML: tag, id, classe.

Selecionando os elementos de uma página: document.getElementById, document.getElementByTagName, document.getElementByClassName, querySelectorAll.

### Adicionar e deletar

Método

- document.createElement(element): cria um novo elemento HTML
- document.removeChild(*element*): remove um elemento
- document.appendChild(*element*): adiciona um elemento
- document.replaceChild(*new, old*): substitui um elemento

### Trabalhando com estilos

Classes - Element.ClassList

- classList.add - adiciona a classe "meu estilo"
- classList.remove - remove a classe "classe"
- classList.toggle - adiciona a classe "dark-mode" caso ela não faça parte da lista e remove ela caso faça

### Acessando diretamente o CSS de um elemento

Usando .style.color, .style.border, style.etc

### Eventos

Qualquer tipo de ação que um usuário faça numa página da web.

**Tipos:**

- Eventos de mouse - mouseover, mouseout
- Eventos de click - click, dbclick
- Eventos de atualização - change, load

### Event Listener

Diretamente no JavaScript, cria um evento que vai ser acionado no momento em que o usuário realizar determinada ação.

[.addEventListener]

Atributo HTML : especifica a função a ser chamada diretamente no elemento HTML.

- onclick
- onmouseover
- onmouseout
- onetc
