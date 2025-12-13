const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mochawesome",
      overwrite: true,
      html: true,
      json: true,
      timestamp: "yyyy-mm-dd_HH-MM-ss",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
