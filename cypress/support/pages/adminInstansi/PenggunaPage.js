class PenggunaPage {
  elements = {
    route:
      "https://staging.mppdigital.go.id/admin/pengaturan/autorisasi/pengguna",
  };

  accessPenggunaPage() {
    cy.visit(this.elements.route);
    cy.wait(500);
  }

  detailPengguna() {
    cy.get('i[class*="ki-outline ki-eye fs-2 text-primary icon-hover"]')
      .eq(0)
      .click();
    cy.wait(500);
  }
}

module.exports = new PenggunaPage();
