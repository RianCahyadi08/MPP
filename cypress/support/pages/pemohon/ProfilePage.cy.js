class ProfilePage {
  elements = {
    locatorMenu: () =>
      cy.get('div[class*="text-white menu-custom menu-title"]'),
    locatorSubMenu: () => cy.get('a[class*="menu-link px-5"]'),
    fieldPassword: () => cy.get('input[autocomplete="new-password"]'),
    btnSimpan: () => cy.get('button[class*="el-button el-button--primary"]'),
  };

  accessProfile() {
    this.elements.locatorMenu().contains(" Profil ").click();
    cy.wait(500);
    this.elements.locatorSubMenu().contains(" Ubah Kata Sandi ").click();
    cy.wait(500);
  }

  updateKataSandi(passwordLama, passwordBaru) {
    this.elements
      .fieldPassword()
      .eq(0)
      .type(passwordLama)
      .should("have.value", passwordLama);
    this.elements
      .fieldPassword()
      .eq(1)
      .type(passwordBaru)
      .should("have.value", passwordBaru);
    this.elements
      .fieldPassword()
      .eq(2)
      .type(passwordBaru)
      .should("have.value", passwordBaru);
    this.elements.btnSimpan().click();
    cy.get(
      'button[class*="swal2-confirm btn fw-semibold btn-light-primary"]'
    ).click();
    cy.wait(500);
  }
}

module.exports = new ProfilePage();
