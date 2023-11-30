describe('Prueba de Mapa en Cypress', function () {
  this.timeout(50000);

  beforeEach(function () {
    cy.visit('https://www.openstreetmap.org/way/262077276#map=16/-17.4432/-66.1126');
  });

  afterEach(function () {
  });

  it('Interacción con el Mapa', function () {
    cy.get('.map-marker', { timeout: 10000 }).should('exist').first().click();

    cy.get('.info-window', { timeout: 10000 }).should('exist');

    cy.get('.close-button').click();
  });
});
