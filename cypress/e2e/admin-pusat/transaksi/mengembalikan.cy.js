import ProsesPermohonan from "../../../support/pages/adminInstansi/ProsesPermohonan";
import LoginPage from "../../../support/pages/LoginPage";

describe("SC01 - Mengembalikan Alur Proses", () => {
  const env = Cypress.env("stageAdmin");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Mengembalikan Alur Proses", () => {
    cy.fixture("users").then((data) => {
      LoginPage.loginAdmin(data.admin.email, data.admin.password);
      ProsesPermohonan.accessProsesPermohonan();
    });
  });
});
