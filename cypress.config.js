const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://bookcart.azurewebsites.net/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
    env: {
      username: "Alisa13",
      password: "Alisa1234567",
      firstName: "Alisa",
      lastName: "Shevchenko",
      gender: "female",
      url: "https://bookcart.azurewebsites.net/",
    }
  },
});