import LoginPage from "../../../support/pages/LoginPage";
import PenggunaPage from "../../../support/pages/adminInstansi/PenggunaPage";

describe("SC01 - View Data Pengguna", () => {
  const env = Cypress.env("stageAdmin");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - View Data Pengguna", () => {
    cy.fixture("users").then((data) => {
      LoginPage.loginAdminInstansi(
        data.adminInstansi.email,
        data.adminInstansi.password
      );
      PenggunaPage.accessPenggunaPage();
    });
  });

  it("TC02 - View Detail Data", () => {
    cy.fixture("users").then((data) => {
      LoginPage.loginAdminInstansi(
        data.adminInstansi.email,
        data.adminInstansi.password
      );
      PenggunaPage.accessPenggunaPage();
      PenggunaPage.detailPengguna();
    });
  });
});
