const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'auto-tests/e2e/**/*.cy.{js,jsx,ts,tsx}',  // Шлях до всіх тестів
    supportFile: 'auto-tests/support/e2e.{js,jsx,ts,tsx}',  // Шлях до файлу підтримки
  },
});
