import LoginPage from "../../../support/pages/LoginPage";
import RekapIzinBelumSelesai from "../../../support/pages/adminInstansi/RekapIzinBelumSelesai";

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
      RekapIzinBelumSelesai.accessProsesPermohonan();
    });
  });

  it.only("TC02 - Filter Data", () => {
    cy.fixture("users").then((data) => {
      LoginPage.loginAdminInstansi(
        data.adminInstansi.email,
        data.adminInstansi.password
      );
      RekapIzinBelumSelesai.accessProsesPermohonan();
      RekapIzinBelumSelesai.filter();
    });
  });
});
