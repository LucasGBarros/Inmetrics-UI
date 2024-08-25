# Case Inmetrics

Olá, me chamo Lucas e este é um projeto de automação UI que foi desenvolvido utilizando a abordagem de BDD (Behavior-Driven Development) com a sintaxe Gherkin,
utilizando cucumber como ferramenta. Acompanhando com a linguagem de programação Cypress para automação Front-End.

ABbaixo, você encontrará o passo a passo para execução de teste automatizado de UI.

## Instruções para executar o teste UI Inmetrics:

1º Passo: Instalar o VSCode se ainda nao o tiver instalado.

2º Passo: Instalar o NodeJs.

3º Passo: Abrir o projeto no VSCode.

4º Passo: Dentro do projeto, abra o terminal e execute os seguintes comandos:

    > npm install --save-dev cypress
    
    > npm i -D cypress cypress-cucumber-preprocessor

    > npm --save-dev cypress-cucumber-preprocessor

5º Passo: Execute o comando abaixo para abrir o Cypress:
    
    > npx cypress open

6º Passo: Com o Cypress aberto, clique em "E2E Testing".

7º Passo: Selecione o navegador Chrome e em seguida, clique em "Start E2E Testing in Chrome".

8º Passo: Após o navegador Chrome abrir, clique em "shopAdv.feature".

9º Passo: Automação em execução.