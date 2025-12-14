import DaftarFisikPage from "../../../support/pages/adminInstansi/DaftarFisikPage";
import LoginPage from "../../../support/pages/LoginPage";

describe("SC06 - Delete Data Daftar Daerah", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress
    // inside the cy.origin() method from failing the test
    return false;
  });
  const env = Cypress.env("stageAdmin");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Delete Data Daftar Daerah", () => {
    cy.fixture("users").then((data) => {
      LoginPage.loginAdmin(data.admin.email, data.admin.password);
      DaftarFisikPage.accessDaftarFisikPage();
      DaftarFisikPage.deleteDataDaerah();
    });
  });
});
