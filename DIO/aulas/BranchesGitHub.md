# O que são Branches?

Branch vem do inglês: galho

Então as branches não são nada além de bifurcações do conteúdo atual.

## git checkout

Para se movimentar entre branches usa-se o comando "git checkout".

Ao acrescentar o -b ao comando anterior, significa que ao mesmo tempo que você está criando uma nova branch, também está se movimentando para dentro dela.

## git merge

O git merge significa que você vai primeiramente andar para a branch que você quer e depois vai juntar com a outra.

## git branch

git branch indica em qual branch você está, dentro do repositório local.

git branch -m nome novo, renomeia a branch quando você já está dentro dela.

Quando se está na branch main, para renomear outra branch usa-se o comando git branch -m o nome antigo o nome novo.

Para deletar uma branch usa-se o comando git branch -d e a branch que queremos deletar.

## git stash

Para mudar de branch sem levar "sujeira" da antiga branch usa-se o comando git stash save "contexto". 

O stash é como uma caixa que guarda esses arquivos e deixa seu repositório de trabalho limpo.

Agora pode usar o git checkout que a branch estará limpa, sem resíduos da outra branch.

Para tirar as coisas do stash usa-se o comando git stash pop e o index da alteração.

## git log

Com git log e o nome do arquivo, conseguimos ver o histórico de commits e alterações feitas naquele arquivo.

O git log --oneline trás o histórico de commits de uma forma resumida.

O git log --graph mostra de uma forma gráfica "ilustrada" a saída "output" do git log.

O comando gitk mostra uma interface gráfica com todas essas informações anteriores.

## git revert x git reset

A primeira coisa que podemos passar para esse comando é pra onde ele está apontando, como por exemplo um hash.

Também pode-se orientar pela HEAD.

**git reset**

- --soft
- --mixed
- --hard

O soft é uma forma inversa do git add, ele move os arquivos para o index.

O mixed move o arquivo para o working directory.

O hard limpa tudo, como se o commit nunca tivesse existido.

## Estruturação de commits

- Melhor legibilidade do histórico
- Amigável para novos desenvolvedores
- Amigável ao versionamento semântico

## commits atômicos

Uma unidade, manter commits com início meio e fim, separando por tipos de modificações.

## Estrutura

- Assunto
- Corpo
- Rodapé

**Assunto**

Curto e compreensível, até 50 caracteres, começar com letra maiúscula, não terminar em ponto, escrito de forma imperativa.

Em português use a voz imperativa

Adiciona a funcionalidade x Funcionalidade x adicionada 

Modifica uma funcionalidade existente        funcionalidade y modificada

Remove funcionalidade y      funcionalidade y removida

**Corpo**

Adicione detalhes ao commit, tente quebrar a linha em 75 caracteres, identifique sua audiência, explique tudo, use markdown.
