import LoginPage from "../../../support/pages/LoginPage";
import RiwayatPage from "../../../support/pages/pemohon/RiwayatPage.cy";

describe("SC01 - Ajukan Permohonan", () => {
  const env = Cypress.env("stagePemohon");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Ajukan Permohonan", () => {
    cy.fixture("users").then((data) => {
      LoginPage.loginPemohon(data.pemohon.email, data.pemohon.password);
      cy.intercept(
        "get",
        `/api/JenisIzin/getlist?q=&is_restricted_instansi=true&limit=5&page=1`
      ).as("getListPelayanan");
      RiwayatPage.accessRiwayat();
      cy.wait("@getListPelayanan").then((res) => {
        RiwayatPage.ajukanPermohonan(res);
      });
    });
  });
});
