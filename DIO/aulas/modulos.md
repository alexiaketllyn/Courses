# Nódulos

São arquivos JavaScript que tem a capacidade de exportar e importar informações de outros arquivos do mesmo tipo.

**Alguma vantagens:**

- Organização do código;
- Compartilhamento de variáveis em escopos diferentes;
- Explicita as dependências dos arquivos.

## Exportar

Named exports: quando você quer exportar mais de uma coisa de um arquivo e quando você exporta elas individualmente.

Isso pode ser feito usando a palavra reservada **export** antes da function ou pode declarar a function normalmente e após colocar entre chaves em export, todas as funções que você quer exportar.

Default export: só pode haver um por arquivo e será o retorno padrão do arquivo.

## Importar

Named exports: palavra reservada **import** e entre chaves as variáveis, depois a palavra reservada from e o caminho do arquivo.

Default exports: a única diferença é que não tem o uso das chaves.

Para importar tudo de um arquivo usa-se o asterisco *.

### Vinculando ao HTML

type="module"

Para fazer testes localmente(de um arquivo no seu computador), será necessário estar rodando um servidor. Isso pode seer feito utilizando a extensão "Live Server", do VSCode.

### Curiosidades

- Módulos sempre estão em "strict mode";
- Podem ser utilizadas as extensões .js e .mjs;
- Para testes locais, é necessário utilizar um servidor;
- Ao importar, sempre lembre da extensão (.js, .mjs);
- Ao importar, sempre utilize "./" como ponto de partida.