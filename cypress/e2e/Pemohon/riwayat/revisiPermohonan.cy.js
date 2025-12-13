import LoginPage from "../../../support/pages/LoginPage";
import RiwayatPage from "../../../support/pages/pemohon/RiwayatPage.cy";

describe("SC02 - Revisi Permohonan", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress
    // inside the cy.origin() method from failing the test
    return false;
  });
  const env = Cypress.env("stagePemohon");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Revisi Permohonan", () => {
    cy.fixture("users").then((data) => {
      LoginPage.loginPemohon(data.pemohon.email, data.pemohon.password);
      cy.intercept(
        "get",
        `/api/permohonan_izin?limit=6&status=&no_permohonan=`
      ).as("getListPermohonan");
      RiwayatPage.accessRiwayat();
      cy.wait("@getListPermohonan").then((res) => {
        RiwayatPage.revisiPermohonan(res);
      });
    });
  });
});
