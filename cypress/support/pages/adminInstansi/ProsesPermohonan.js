class ProsesPermohonan {
  elements = {
    route:
      "https://staging.mppdigital.go.id/admin/transaksi/permohonan-izin/dalam-proses",
  };

  accessProsesPermohonan() {
    cy.visit(this.elements.route);
    cy.wait(500);
  }

  filter() {
    cy.get('h3[class*="fs-4 fw-semibold mb-0 me-4"]').click();
    cy.wait(500);
    cy.get(
      'i[class*="ki-outline ki-filter-tick fs-2 text-white me-4"]'
    ).click();
    cy.wait(500);
  }
}

module.exports = new ProsesPermohonan();
