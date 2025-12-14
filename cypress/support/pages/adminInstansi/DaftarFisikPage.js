class DaftarFisikPage {
  elements = {
    route:
      "https://staging.mppdigital.go.id/admin/sistem-manajemen-konten/mpp/tentang",
  };

  accessDaftarFisikPage() {
    cy.visit(this.elements.route);
    cy.wait(500);
  }

  search(value) {
    cy.get('input[placeholder="Pencarian"]')
      .type(value)
      .should("have.value", value);
    cy.wait(500);
    cy.realPress("Enter");
    cy.wait(500);
  }
}

module.exports = new DaftarFisikPage();
