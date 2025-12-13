class LoginPage {
  elements = {
    email: () => cy.get('input[type="email]'),
    password: () => cy.get('input[type="Password"]'),
    submitBtn: () => cy.get('button[id*="kt_sign_in_submit"]'),
    assertDashboard: () => cy.get('li[class*="breadcrumb-item text-muted"]'),
  };

  login(email, password) {
    this.elements.email().type(email);
    this.elements.password().type(password);
    this.elements.submitBtn().click();
    this.elements.assertDashboard().contains("Dashboard").should("be.visible");
  }
}

module.exports = new LoginPage();
