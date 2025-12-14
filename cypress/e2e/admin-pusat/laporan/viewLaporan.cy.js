import LoginPage from "../../../support/pages/LoginPage";
import RekapIzinBelumSelesai from "../../../support/pages/adminInstansi/RekapIzinBelumSelesai";

describe("SC01 - View Laporan - Rekap Izin Belum Selesai", () => {
  const env = Cypress.env("stageAdmin");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - View Laporan - Rekap Izin Belum Selesai", () => {
    cy.fixture("users").then((data) => {
      LoginPage.loginAdmin(data.admin.email, data.admin.password);
      RekapIzinBelumSelesai.accessProsesPermohonan();
    });
  });

  it("TC02 - Filter Data", () => {
    cy.fixture("users").then((data) => {
      LoginPage.loginAdmin(data.admin.email, data.admin.password);
      RekapIzinBelumSelesai.accessProsesPermohonan();
      RekapIzinBelumSelesai.filter();
    });
  });
});
