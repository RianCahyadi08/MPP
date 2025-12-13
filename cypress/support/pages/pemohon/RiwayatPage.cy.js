class RiwayatPage {
  elements = {
    locatorMenu: () => cy.get('span[class="menu-title"]'),
    btnAjukanPermohonan: () =>
      cy.get(
        'button[class*="el-button el-button--primary el-button--sm float-end m-0"]'
      ),
    btnCekSyarat: () =>
      cy.get('button[class*="el-button el-button--primary el-button--large"]'),
    btnKirim: () =>
      cy.get(
        'button[class*="swal2-confirm swal2-styled swal2-default-outline"]'
      ),
  };

  accessRiwayat() {
    this.elements.locatorMenu().contains("Riwayat").click();
    cy.wait(500);
    cy.get(
      'h1[class*="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0"]'
    ).should("be.visible");
  }

  ajukanPermohonan(res) {
    this.elements.btnAjukanPermohonan().click();
    cy.wait(500);
    let data = res.response.body.data.items[0].jenis_izin;
    cy.get(
      'div[class*="d-flex flex-column justify-content-end align-items-start"] > p'
    )
      .contains(data)
      .click();
    cy.wait(500);
    cy.get('input[class*="el-select__input is-large"]').eq(0).click();
    cy.wait(500);
    cy.realPress("ArrowDown");
    cy.wait(500);
    cy.realPress("Enter");
    cy.wait(500);
    cy.realPress("Tab");
    cy.wait(500);
    cy.realPress("Enter");
    cy.wait(500);
    cy.realPress("ArrowDown");
    cy.wait(500);
    cy.realPress("Enter");
    cy.wait(500);
    this.elements.btnCekSyarat().click();
    cy.wait(500);
    this.elements.btnKirim().click();
    cy.wait(500);
  }

  revisiPermohonan(res) {
    // debugger;
    cy.wait(500);
    let data = res.response.body.data;
    data.forEach((element) => {
      let status = element.status;
      if (status == "ditolak") {
        cy.get(
          'button[class*="el-button el-button--danger el-button--small"] > span'
        )
          .contains("Detail Penolakan")
          .click();
        cy.wait(500);
        cy.get('button[class*="el-button el-button--primary is-plain"]')
          .eq(1)
          .click();
        cy.wait(500);
        cy.get('button[class*="btn btn-primary"]').click();
        cy.wait(500);
      }
    });
  }
}

module.exports = new RiwayatPage();
