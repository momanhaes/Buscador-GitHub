# Portal Matheus Manhães

Bem-vindo ao Portal Matheus Manhães! Neste projeto foi implementado um menu de componentes úteis para que o projeto possa ser usado como modelo de laboratório para implementações de estilos, testes de bibliotecas, implementações de testes unitários e e2e, aplicações de boas práticas e padrões de projetos.

## Tecnologias utilizadas
O projeto foi desenvolvido com o _framework_ Angular na versão 15.

"Por baixo dos panos" foram utilizadas outras tecnologias como: 

* HTML, CSS, SASS, JavaScript e TypeScript
* Bootstrap, Angular Material e NGX Mask
* Jasmine 

## Inicialização da SPA
Clone o repositório usando o comando abaixo:

```sh
git clone https://github.com/momanhaes/portal-mmanhaes
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

* `/home` - Página inicial de apresentação.

* `/calculator` - Página da calculadora.

* `/gh-search` - Página do buscador de repositórios.

* `/experience` - Página de apresentação pessoal das experiências profissionais.

* `/education` - Página de apresentação pessoal das experiências acadêmicas.

* `/awards` - Página de apresentação pessoal das premiações.

* `/customer/list` - Página de acesso à listagem de clientes.

* `/customer/register` - Página de acesso ao registro de clientes.

* `/customer/register/:id` - Página de acesso ao registro de um cliente específico.

* `/styleguide/typography` - Página do _styleguide_ referente a tipografia do projeto.

* `/styleguide/colors` - Página do _styleguide_ referente a paleta de cores do projeto.

* `/styleguide/inputs` - Página do _styleguide_ referente aos _inputs_ do projeto.

* `/styleguide/buttons` - Página do _styleguide_ referente aos botões do projeto.

* `/styleguide/items` - Página do _styleguide_ referente aos itens _(label + value)_ do projeto.

* `/styleguide/icons` - Página do _styleguide_ referente aos ícones do projeto.

* `/styleguide/pipes` - Página do _styleguide_ referente aos _pipes_ do Angular implementados no projeto.

* `/**` - Página _default_ para erros 404 _(not found)_ a fim lidar com rotas não programadas do sistema.

## Testes

Foram implementados alguns testes unitários com Jasmine. Para rodar os testes unitários digite o comando abaixo:

```sh
npm run test
```

## Chamadas HTTP

Na página do buscador de repositórios foi consumida a API pública do GitHub para buscar usuários e seus respectivos repositórios. Foi usada a URL `https://api.github.com/users` com chamadas para os seguintes _endpoints_:

* /{user}
* /{user}/repos

Na página de registro de cliente foi implementado um componente chamado _app-cep_ que recebe um número referente ao CEP e retorna o endereço completo do cliente. Foi consumida a API gratuita do [ViaCEP](https://viacep.com.br/). Foi usada a URL `viacep.com.br/ws/` com chamadas para o _endpoint_ /{cep}/json.

## Outras informações

* O projeto foi construído considerando boas práticas do Clean Code e conceitos como Single Responsiblity Principle do SOLID, aproveitando o máximo dos recursos do paradigma da programação reativa ao lidar com _observables_ da biblioteca RxJS.
* As transições de tela possuem animações feitas a partir do módulo nativo do Angular para tornar a navegação do usuário mais fluida.
* As páginas foram desenvolvidas visando responsividade e usabilidade.
* Os fluxos possuem tratamento de erro e _loading_.