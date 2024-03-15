describe("Articles page", () => {
  it("displays the most popular articles", () => {
    cy.visit("/articles");
    cy.get("[data-testid='article-title']").should("have.length", 5);
    cy.get("[data-testid='article-title']")
      .first()
      .should("contain", "Article 1");
    cy.get("[data-testid='article-title']")
      .last()
      .should("contain", "Article 5");
  });
});
