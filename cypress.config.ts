import { defineConfig } from "cypress";

export default defineConfig({
  experimentalStudio: true,

  env: {
    celtics: "NY Times",
  },

  video: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
