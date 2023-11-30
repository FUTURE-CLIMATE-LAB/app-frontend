describe('Prueba de Mapa en Cypress', function () {
  this.timeout(50000);

  beforeEach(function () {
    cy.visit('https://www.google.com/maps/@-17.4617571,-66.1058345,15z?entry=ttu');
  });

  afterEach(function () {
  });

  it('Interacción con el Mapa', function () {
    cy.get('.map-marker', { timeout: 10000 }).should('exist').first().click();

    cy.get('.info-window', { timeout: 10000 }).should('exist');

    cy.get('.close-button').click();
  });
});
