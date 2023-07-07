const singleSpaDefaults = require("webpack-config-single-spa");
const { merge } = require("webpack-merge");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "svelte-react-vue-angular-spa",
    projectName: "homepage",
    webpackConfigEnv,
    argv,
    orgPackagesAsExternal: true,
    rootDirectoryLevel: 1,
    disableHtmlGeneration: false,
  });

  return merge(defaultConfig, {
    performance: {
      hints: false,
      maxAssetSize: 512000,
      maxEntrypointSize: 512000,
    },
    module: {
      rules: [
        {
          test: /\.svelte$/,
          exclude: /node_modules/,
          use: {
            loader: "svelte-loader",
          },
        },
        {
          test: /\.css$/,
          use: ["postcss-loader"],
        },
      ],
    },
  });
};
