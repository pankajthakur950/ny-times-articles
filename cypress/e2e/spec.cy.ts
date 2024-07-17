describe('Testing the Article List page', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000/')
  });
  
  it('should load the articles on load of the page', () => {
    const elm = cy.get('.article_item').first();
    elm.should('exist');
  });

  it('should navigate to details page on click of any article item in list', () => {
    const elm = cy.get('.article_item').first();
    elm.click();
    cy.url().should('contain', 'detail');
  });
})