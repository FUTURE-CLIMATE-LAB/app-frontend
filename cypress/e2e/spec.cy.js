
describe('This is the describe block', function () {
  
  this.timeout(50000);

  beforeEach(function () {
    
  });

  afterEach(function () {
    
  });

  it('POM Test Check', function () {
   
    const baseUrl = 'https://www.google.com/';

    
    cy.visit(baseUrl);

    
    cy.get('[name="q"]').type('Cypress Javascript Example'); 
    cy.get('[name="btnK"]').first().click();

    //cy.get('#rso').should('contain', 'Cypress results');
  });
});
