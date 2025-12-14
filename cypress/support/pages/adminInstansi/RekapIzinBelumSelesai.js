class RekapIzinBelumSelesai {
  elements = {
    route: "https://staging.mppdigital.go.id/admin/form/report-grid/50479",
  };

  accessProsesPermohonan() {
    cy.visit(this.elements.route);
    cy.wait(500);
  }

  filter() {
    cy.get('input[placeholder*="Tgl Awal"]').click();
    cy.wait(500);
    cy.realPress("ArrowDown");
    cy.wait(500);
    cy.realPress("Enter");
    cy.get('input[placeholder*="Tgl Akhir"]');
    cy.wait(500);
    cy.realPress("ArrowDown");
    cy.wait(500);
    cy.realPress("ArrowDown");
    cy.wait(500);
    cy.realPress("Enter");
    cy.wait(500);
    cy.realPress("Enter");
  }
}

module.exports = new RekapIzinBelumSelesai();
