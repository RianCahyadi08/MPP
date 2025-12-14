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

  createDataDaerah(description) {
    cy.get(
      'a[class*="btn btn-sm btn-icon-white btn-primary btn-text-white hover-scale"]'
    ).click();
    cy.wait(500);
    cy.get(
      'div[class*="el-select__selected-item el-select__placeholder is-transparent"]'
    )
      .eq(0)
      .click();
    cy.wait(500);
    cy.realPress("ArrowDown");
    cy.wait(500);
    cy.realPress("Enter");
    cy.wait(500);
    // Pilih daerah
    cy.realPress("Tab");
    cy.wait(500);
    cy.realPress("Enter");
    cy.wait(500);
    cy.realPress("ArrowDown");
    cy.wait(500);
    cy.realPress("Enter");
    // input deskripsi
    cy.get('textarea[placeholder*="Please input"]')
      .type(description)
      .should("have.value", description);
    cy.wait(500);
    cy.get('button[class*="btn btn-primary"]').click();
    cy.wait(500);
  }

  detail() {
    cy.get('i[class*="ki-outline ki-eye fs-2 text-primary icon-hover"]')
      .eq(0)
      .click();
    cy.wait(1000);
  }
  detailDataLayanan() {
    cy.get('a[class*="btn btn-outline"]').eq(2).click();
    cy.wait(500);
  }
}

module.exports = new DaftarFisikPage();
