# O que é ReactJS?

Uma biblioteca JavaScript para criar interfaces de usuário.

Criado em 2011 por Jordan Walke no Facebook;

Baseado no XHP, um framework para criação de HTML no PHP;

Utilizado no mural de notícias da ferramenta.

- 2012 - Utilizado no Instagram
- 2013 - Anúncio para liberação OpenSource na JSConf US
- 2015 - React Native
- 2015 - UWP (Universal Windows Plataform)

React é uma biblioteca e não um framework;

A principal função é a criação da interface para o usuário.

React é uma linguagem declarativa.

Declarativa vs Imperativa: O React está preocupado apenas com o que é exibido na interface do usuário.

Pode ser utilizado em qualquer lugar.

React é baseado em componentes.

## Configuração

- React Create App
- React Scripts
- Task Runners e Bundler Sizers

## O que é JSX?

const element = <h1>Hello, world!</h1>;

Nem HTML e nem uma string!

React nãosepara as tecnologias colocando marcação em arquivos separados, e sim separa conceios e mantém código pouco acoplado chamando-os de componentes.

Não é obrigatório a utilização do JSX.

Sintax Suggar para React.createElement.

O browser não interpreta o JSX, para isso é necessário um transpilador para que a aplicação possa entender o código. O mais utilizado é o Babel.

## Renderização

- Renderização de elementos;
- React DOM;
- Nós Raíz.

React "pensa" em como a interface deve estar a cada momento ao invés de alterá-la com o tempo, o que faz ter ganho de performance e evita uma série de erros.

### Componentes e Props

- Função e Classe;
- Props;
- Composição de Componentes;
- Extração de Componentes

## Estado e Ciclo de vida

- Inicialização
- Montagem
- Atualização
- Desmontagem

Nenhum componente pai ou filho devem saber se outro componente possui estado ou não.

O estado é apenas local ao componente e caso seja necessário enviar algum atributo para outro então é feito via props.

### Ecossistema

- React Router;
- Redux;
- Material UI;
- Ant-Design;
- Storybook;
- Gatsby;
- Jest;
- React i18n Next.

## O que é Webpack?

É um module bundler (um empacotador de módulos para aplicações JS)

Gerar bundler  que será utilizado no HTML, em ES5.

### Suporte

- Fontes;
- CSS;
- Imagens;
- HTML;
- JS;
- Pluggins.
 
## Configuração

Principais conceitos do Webpack:

- Entry - utilizando grafo, o Webpack precisa de um ponto de entrada para buscar todos módulos e dependências.
- Output - é para determinar quais são os bundlers que o webpack irá emitir.
- Loaders - é para permitir que o webpack gerencie arquivos que não são JavaScript.
- Plugins - podem ser utilizados para otimização de pacotes, minificação, injeção de scripts e muito mais.
- Mode - utilizados para abordagem de configuração zero. é possível configurar módulos como **production**, **development** ou **none**.
- Production trás otimizações internas
- Development - é executado com três plugins: UglifyJSplugin, ModudleConcatenationPlugin e NoEmitOnErrorsPlugin.





 
