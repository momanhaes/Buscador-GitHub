# Styleguide

Bem-vindo ao Styleguide! Neste projeto foi implementado um buscador de usuários do GitHub, mas a ideia do projeto é ser algo além de um 'repo-search'. Foi implementado um menu de componentes úteis para que o projeto possa ser usado como modelo de laboratório para implementações de estilos, testes de bibliotecas, implementações de testes unitários e e2e, aplicações de boas práticas e padrões de projetos.

## Tecnologias utilizadas
O projeto foi desenvolvido com o _framework_ Angular na versão 15.

"Por baixo dos panos" foram utilizadas outras tecnologias como: 

* HTML, CSS, SASS, JavaScript e TypeScript
* Bootstrap, Font Awesome, Angular Material e Sweet Alert
* Jasmine e Cypress

## Informações gerais
O projeto está hospedado no Netlify, ou seja, caso queria acessá-lo por uma URL pública, abra [https://mmanhaes-styleguide.netlify.app/home](https://mmanhaes-styleguide.netlify.app/home) em seu navegador.

Caso prefira rodar localmente na sua máquina, siga os procedimentos abaixo.

## Inicialização da SPA
Clone o repositório usando o comando abaixo:

```sh
git clone https://github.com/momanhaes/styleguide
```

Instale as dependências do projeto rodando o comando abaixo:

```sh
npm install
```

Suba o projeto rodando o comando abaixo:

```sh
npm start
```

Abra [http://localhost:4200](http://localhost:4200) em seu navegador.

## Documentação das features

### Rotas públicas da aplicação

`/home`

* Página inicial de apresentação do projeto.

`/gh-search`

* Página de acesso ao projeto do buscador de repositórios do GitHub.

`/typography`

* Página do _styleguide_ referente a tipografia do projeto.

`/colors`

* Página do _styleguide_ referente a paleta de cores do projeto.

`/inputs`

* Página do _styleguide_ referente aos _inputs_ do projeto.

`/buttons`

* Página do _styleguide_ referente aos botões do Angular Material implementados no projeto.

`/tables`

* Página do _styleguide_ referente às tabelas do Angular Material implementadas no projeto.

`/items`

* Página do _styleguide_ referente aos itens _(label + value)_ do projeto.

`/icons`

* Página do _styleguide_ referente aos ícones do font-awesome, de svgs e de imagens do projeto.

`/pipes`

* Página do _styleguide_ referente aos _pipes_ do Angular implementados no projeto.

`/**`

* Página _default_ para erros 404 _(not found)_ a fim lidar com rotas não programadas do sistema.

## Testes

Foram implementados alguns testes unitários com Jasmine e alguns testes _end-to-end_ com Cypress. Para rodar os testes unitários digite o comando abaixo:

```sh
npm run test
```

E para abrir o painel do Cypress e rodar os testes e2e, siga os procedimentos a seguir.

Rode o comando abaixo:

```sh
npm run cypress
```

Escolha a opção "E2E Testing", depois escolha um navegador (Chrome, por exemplo) para rodar os testes e finalmente clique em "Start E2E Testing in Chrome".

O painel do Cypress irá exibir o diretório de testes. Clicar no teste que deseja executar é o suficiente pra fazê-lo rodar. É possível acompanhar o andamento do teste automatizado pela instância do navegador que o Cypress abre.

Caso queira rodar o projeto em container 'headless', ou seja, rodar os testes sem precisar abrir o painel interativo do Cypress, use o comando abaixo:

```sh
npm run cypress:run
```

## Chamadas HTTP

Pra tornar o projeto possível, foi consumida a API pública do GitHub para buscar usuários e seus respectivos repositórios. Foi usada a URL `https://api.github.com/users` com chamadas para os seguintes _endpoints_:

* /{user}
* /{user}/repos

## Outras informações

* O projeto foi construído considerando boas práticas do Clean Code e conceitos como Single Responsiblity Principle do SOLID, aproveitando o máximo dos recursos do paradigma da programação reativa ao lidar com _observables_ da biblioteca RxJS.
* As transições de tela possuem animações feitas a partir do módulo nativo do Angular para tornar a navegação do usuário mais fluida.
* As páginas foram desenvolvidas visando responsividade e usabilidade.
* Os fluxos possuem tratamento de erro e _loading_.