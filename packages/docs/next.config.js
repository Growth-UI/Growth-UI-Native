/** @type {import('next').NextConfig} */
const path = require("path");
const nextTranslate = require("next-translate");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@growth-ui/native", "react-native-svg"]);

module.exports = withPlugins([nextTranslate, withTM], {
  // Allows us to access other directories in the monorepo
  experimental: {
    externalDir: true,
  },
  // This feature conflicts with next-images
  images: {
    disableStaticImages: true,
  },
  webpack: (config, options) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web",
    };
    config.resolve.extensions = [".web.js", ".web.ts", ".web.tsx", ...config.resolve.extensions];

    if (options.isServer) {
      config.externals = ["react", "react-native-web", ...config.externals];
    }
    config.resolve.alias["react"] = path.resolve(__dirname, ".", "node_modules", "react");
    config.resolve.alias["react-native-web"] = path.resolve(
      __dirname,
      ".",
      "node_modules",
      "react-native-web"
    );
    config.resolve.alias["react-native-svg"] = path.resolve(
      __dirname,
      ".",
      "node_modules",
      "react-native-svg"
    );

    return config;
  },
});
