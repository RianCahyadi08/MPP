import ProsesPermohonan from "../../../support/pages/adminInstansi/ProsesPermohonan";
import LoginPage from "../../../support/pages/LoginPage";

describe("SC01 - View Proses Permohonan", () => {
  const env = Cypress.env("stageAdmin");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - View Proses Permohonan", () => {
    cy.fixture("users").then((data) => {
      LoginPage.loginAdmin(data.admin.email, data.admin.password);
      ProsesPermohonan.accessProsesPermohonan();
    });
  });

  it("TC02 - Filter data", () => {
    cy.fixture("users").then((data) => {
      LoginPage.loginAdmin(data.admin.email, data.admin.password);
      ProsesPermohonan.accessProsesPermohonan();
      ProsesPermohonan.filter();
    });
  });
});
