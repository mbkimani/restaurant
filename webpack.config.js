const path = require("path");
const json = require("json");

module.exports = {
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|giff|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.xml$/i,
        use: "xml-loader",
      },
      {
        test: /\.json$/i,
        type: "json",
        parser: {
          parse: json.parse,
        },
      },
    ],
  },
};
