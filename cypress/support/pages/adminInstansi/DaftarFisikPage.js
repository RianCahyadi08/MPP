class DaftarFisikPage {
  elements = {
    route:
      "https://staging.mppdigital.go.id/admin/sistem-manajemen-konten/mpp/tentang",
  };

  accessDaftarFisikPage() {
    cy.visit(this.elements.route);
    cy.wait(500);
  }
}

module.exports = new DaftarFisikPage();
