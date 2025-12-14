import ProsesPermohonan from "../../../support/pages/adminInstansi/ProsesPermohonan";
import LoginPage from "../../../support/pages/LoginPage";

describe("SC03 - Tolak Permohonan", () => {
  const env = Cypress.env("stageAdmin");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Tolak Permohonan", () => {
    cy.fixture("users").then((data) => {
      LoginPage.loginAdminInstansi(
        data.adminInstansi.email,
        data.adminInstansi.password
      );
      ProsesPermohonan.accessProsesPermohonan();
      ProsesPermohonan.tolakPermohonan();
    });
  });
});
