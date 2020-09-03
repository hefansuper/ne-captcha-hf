import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript";
import sourceMaps from "rollup-plugin-sourcemaps";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";
const version = pkg.version;

export default {
  input: "index.tsx",
  output: [
    {
      format: "es",
      file: "lib/bundle.esm.js",
      sourcemap: true,
    },
  ],
  plugins: [
    babel({
      babelHelpers: "bundled",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    typescript({
      exclude: "node_modules/**",
      typescript: require("typescript"),
    }),
    sourceMaps(),
    terser(),
  ],
};
