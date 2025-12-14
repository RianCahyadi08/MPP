import DaftarFisikPage from "../../../support/pages/adminInstansi/DaftarFisikPage";
import LoginPage from "../../../support/pages/LoginPage";

describe("SC01 - View Page Daftar Fisik", () => {
  const env = Cypress.env("stageAdmin");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - View Page Daftar Fisik", () => {
    cy.fixture("users").then((data) => {
      LoginPage.loginAdmin(data.admin.email, data.admin.password);
      DaftarFisikPage.accessDaftarFisikPage();
      DaftarFisikPage.createDataDaerah("Lorem ipsum dolor sir amet");
    });
  });
});
