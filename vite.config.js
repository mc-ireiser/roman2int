const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "roman2int",
      fileName: (format) => `roman2int.${format}.js`,
    },
  },
});
