const moduleResolverPlugin = [
  "module-resolver",
  {
    root: ["./src"],
    extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
    alias: {
      test: "./test",
    },
  },
];

module.exports = function (api) {
  const plugins = [moduleResolverPlugin, "react-native-reanimated/plugin"];
  const isProduction = api.env("production");

  if (isProduction) {
    plugins.push("transform-remove-console");
  }

  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins,
  };
};
