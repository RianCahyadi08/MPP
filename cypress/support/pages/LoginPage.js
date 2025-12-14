class LoginPage {
  elements = {
    email: () => cy.get('input[placeholder*="Email Pengguna"]'),
    password: () => cy.get('input[placeholder*="Kata Sandi"]'),
    submitBtn: () => cy.get('button[id*="kt_sign_in_submit"]'),
  };

  loginPemohon(email, password) {
    this.elements.email().type(email);
    this.elements.password().type(password);
    this.elements.submitBtn().click();
    cy.get('span[class="menu-title"]')
      .contains("Dashboard")
      .should("be.visible");
  }

  loginAdminInstansi(email, password) {
    cy.get('input[placeholder*="Masukan Email Pengguna"]')
      .type(email)
      .should("have.value", email);
    this.elements.password().type(password).should("have.value", password);
    this.elements.submitBtn().click();
    cy.get('li[class="breadcrumb-item text-muted"]')
      .contains("Dashboard")
      .should("be.visible");
  }

  loginAdmin(email, password) {
    cy.get('input[placeholder*="Masukan Email Pengguna"]')
      .type(email)
      .should("have.value", email);
    this.elements.password().type(password).should("have.value", password);
    this.elements.submitBtn().click();
    cy.get('li[class="breadcrumb-item text-muted"]')
      .contains("Dashboard")
      .should("be.visible");
  }
}

module.exports = new LoginPage();
