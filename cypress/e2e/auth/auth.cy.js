import LoginPage from "../../support/pages/LoginPage";

describe("SC01", () => {
  const env = Cypress.env("stage");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Login dengan Email pengguna yang valid", () => {
    cy.fixture("users").then((data) => {
      LoginPage.login(data.validUser.email, data.validUser.password);
    });
  });
});
