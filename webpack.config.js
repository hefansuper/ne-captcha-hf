const path = require("path");

module.exports = {
  mode: "production",
  entry: "./index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "ne-captcha-react.js",
    // library: "ne-captcha-react",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "cache-loader",
          },
          //   {
          //     loader: "thread-loader",
          //   },
          {
            loader: "babel-loader",
            options: {
              babelrc: true,
            },
          },
        ],
      },
      {
        test: /\.(tsx|ts)?$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|build)/,
        use: [
          {
            loader: "cache-loader",
          },
          //   {
          //     loader: "thread-loader",
          //   },
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/env", "@babel/react"],
              babelrc: true,
              cacheDirectory: true,
            },
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  externals: {
    react: " react",
    "react-dom": "react-dom",
  },
};
