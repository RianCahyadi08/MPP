import LoginPage from "../../../support/pages/LoginPage";
import DaftarFisikPage from "../../../support/pages/adminInstansi/DaftarFisikPage";

describe("SC01 - View Laporan - Rekap Izin Belum Selesai", () => {
  const env = Cypress.env("stageAdmin");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - View Laporan - Rekap Izin Belum Selesai", () => {
    cy.fixture("users").then((data) => {
      LoginPage.loginAdminInstansi(
        data.adminInstansi.email,
        data.adminInstansi.password
      );
      DaftarFisikPage.accessDaftarFisikPage();
    });
  });
});
