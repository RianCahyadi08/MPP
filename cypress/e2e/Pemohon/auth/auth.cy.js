import LoginPage from "../../../support/pages/LoginPage";

describe("SC01 - Validasi email pengguna dan kata sandi", () => {
  const env = Cypress.env("stagePemohon");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Login dengan Email pengguna yang valid", () => {
    cy.fixture("users").then((data) => {
      LoginPage.loginPemohon(data.pemohon.email, data.pemohon.password);
    });
  });
});
