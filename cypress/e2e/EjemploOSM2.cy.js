describe('Prueba de búsqueda de Wallys en Google Maps', function () {
  this.timeout(50000);

  beforeEach(function () {
    cy.visit('https://www.google.com/maps');
  });

  afterEach(function () {
  });

  it('Buscar Wallys en Google Maps', function () {
    cy.get('.searchboxinput').should('exist');
    cy.get('.searchboxinput').type('Wallys{enter}');
    cy.get('.section-result-title').should('exist');
  });
});
