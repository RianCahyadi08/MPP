import ProsesPermohonan from "../../../support/pages/adminInstansi/ProsesPermohonan";
import LoginPage from "../../../support/pages/LoginPage";

describe("SC01 - Tolak Permohonan", () => {
  const env = Cypress.env("stageAdmin");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Tolak Permohonan", () => {
    cy.fixture("users").then((data) => {
      LoginPage.loginAdmin(data.admin.email, data.admin.password);
      ProsesPermohonan.accessProsesPermohonan();
    });
  });
});
