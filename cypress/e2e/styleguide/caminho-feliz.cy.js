/// <reference types="cypress" />

context('TESTE CAMINHO FELIZ', () => {
    beforeEach(() => cy.visit('https://mmanhaes-styleguide.netlify.app/home'));

    it('Testando e garantindo que o formulário tem um título', () => {
        cy
            .get('[data-cy="home-title"]')
            .as('homeTitle')
            .contains('Bem-vindo ao Styleguide!');
    });

    it('Clicando no botão para acessar o buscador', () => {
        cy
            .get('[data-cy="gh-search-button"]')
            .as('ghSearchButton')
            .click();
    });

    it('Acessando o input e digitando um usuário válido', () => {
        cy
            .visit('https://mmanhaes-styleguide.netlify.app/gh-search')
            .get('[data-cy="input-usuario"]')
            .as('inputUsuario')
            .type('momanhaes');
    });

    it('Clicando no botão para acessar os repositórios', () => {
        cy
            .visit('https://mmanhaes-styleguide.netlify.app/gh-search')
            .get('[data-cy="input-usuario"]')
            .as('inputUsuario')
            .type('momanhaes')
            .get('[data-cy="button-repos"]')
            .as('buttonRepos')
            .click();
    });
});