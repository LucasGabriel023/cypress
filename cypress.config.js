const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: "https://phptravels.net",
    specPattern: "cypress/e2e/features/*.feature",  
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
