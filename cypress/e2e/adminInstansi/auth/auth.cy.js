import LoginPage from "../../../support/pages/LoginPage";

describe("SC01 - Validasi email pengguna dan kata sandi admin instansi", () => {
  const env = Cypress.env("stageAdmin");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Login dengan Email pengguna yang valid", () => {
    cy.fixture("users").then((data) => {
      LoginPage.loginAdminInstansi(
        data.adminInstansi.email,
        data.adminInstansi.password
      );
    });
  });
});
