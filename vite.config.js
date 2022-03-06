const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    target: "es2015",
    lib: {
      entry: path.resolve(__dirname, "src/roman2int.ts"),
      name: "roman2int",
      fileName: (format) => `roman2int.${format}.js`,
    },
  },
});
