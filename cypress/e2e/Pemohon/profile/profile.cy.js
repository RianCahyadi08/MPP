import LoginPage from "../../../support/pages/LoginPage";
import ProfilePage from "../../../support/pages/pemohon/ProfilePage.cy";

describe("SC01 - View Halaman Ubah Kata Sandi", () => {
  const env = Cypress.env("stagePemohon");

  beforeEach(() => {
    cy.visit(env);
  });

  it("TC01 - Ubah kata sandi", () => {
    cy.fixture("users").then((data) => {
      LoginPage.loginPemohon(data.pemohon.email, data.pemohon.password);
      ProfilePage.accessProfile();
      ProfilePage.updateKataSandi("Kartu789*@#", "Kartu789*@#");
    });
  });
});
